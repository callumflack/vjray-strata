const keystone = require('keystone');
const Post = keystone.list('Post');

const resolvers = {
  Query: {
    posts: async () => {
      const posts = await Post.model.find().exec();
      return posts;
    },
  },
};

module.exports = resolvers;
