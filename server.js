const { promisify } = require('util');
const express = require('express');
const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql');
const keystone = require('keystone');

const pkg = require('./package.json');


function promiseRejectionHandler(err, promise) {
  console.error('Unhandled rejection: ', promise);
}

process.on('unhandledRejection', promiseRejectionHandler);


async function setupGraphql(app) {
  const schema = require('./graphql/index.js');
  const resolvers = require('./graphql/resolvers');

  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
  });

  app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  }));
}

async function setupKeystone(app) {
  keystone.init({
    'name': 'VJ Ray',
    'brand': 'VJ Ray',

    'auth': true,
    'user model': 'User',
    'auto update': true,

    'mongo': process.env.MONGO_URI || 'mongodb://localhost/' + pkg.name,
    'cookie secret': process.env.COOKIE_SECRET || 'R:2fClij_RT2V]&UO{zx4{f-7<5syx',
  });

  keystone.import('models');
  keystone.set('routes', app);

  await setupGraphql(app);

  keystone.start();
}

async function start() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = express();

  await setupKeystone(app);
}

start();
