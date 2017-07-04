require('dotenv').config();

const { promisify } = require('util');
const express = require('express');
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

  // Storage location of guide pdf files
  // Will be updated to use 3rd party permanant storage
  app.use(express.static('/tmp/vjrayfiles/'));

  // Allow cross origin access
  app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
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
    'mongo options': {
      server: {
        keepAlive: 1,
      }
    },

    'cookie secret': process.env.COOKIE_SECRET,
    'cloudinary config': process.env.CLOUDINARY_URI,
  });

  keystone.import('models');
  keystone.set('routes', app);

  await setupGraphql(app);

  keystone.start();
}

async function start() {
  const app = express();

  await setupKeystone(app);
}


start();
