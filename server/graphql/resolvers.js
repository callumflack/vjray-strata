const keystone = require('keystone');
const Post = keystone.list('Post');

const resolvers = {
  Query: {
    posts: async (obj, { limit=0 }) => {
      // A limit of 0 returns all documents
      let query = Post.model.find().limit(limit);

      return await query.exec();
    },
  },
};

module.exports = resolvers;
