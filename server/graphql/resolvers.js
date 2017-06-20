const keystone = require('keystone');
const Post = keystone.list('Post');
const Guide = keystone.list('Guide');

const resolvers = {
  Query: {
    post: async (obj, { slug }) => {
      return await Post.model.findOne({ slug })
      .exec();
    },
    posts: async (obj, { limit=0 }) => {
      // A limit of 0 returns all documents
      return await Post.model.find()
      .limit(limit)
      .exec();
    },
    guides: async (obj, { limit=0 }) => {
      // A limit of 0 returns all documents
      return await Guide.model.find()
      .limit(limit)
      .exec();
    },
  },
};

module.exports = resolvers;
