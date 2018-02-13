const keystone = require('keystone');
const Post = keystone.list('Post');
const Guide = keystone.list('Guide');
const Quote = keystone.list('Quote');
const Page = keystone.list('Page');
const PdfSheet = keystone.list('PdfSheet');
const Testimonial = keystone.list('Testimonial');

const resolvers = {
  Query: {
    post: async (obj, { slug }) => {
      return await Post.model.findOne({ slug })
        .where('state', 'published')
        .exec();
    },

    posts: async (obj, { limit = 0 }) => {
      // A limit of 0 returns all documents
      return await Post.model.find()
        .where('state', 'published')
        .limit(limit)
        .exec();
    },

    guides: async (obj, { limit = 0, primary = false, featured = false }) => {
      if (primary) {
        const guide = await Guide.model.findOne({
          isPrimary: true,
        })
          .exec();

        return [guide];
      }

      if (featured) {
        return await Guide.model.find({
          isFeatured: true,
        })
          .limit(limit)
          .exec();
      }

      // A limit of 0 returns all documents
      return await Guide.model.find()
        .limit(limit)
        .exec();
    },

    testimonials: async (obj, { limit = 0, featured = false }) => {
      if (featured) {
        return await Testimonial.model.find({
          isFeatured: true,
        })
          .limit(limit)
          .exec();
      }

      // A limit of 0 returns all documents
      return await Testimonial.model.find()
        .limit(limit)
        .exec();
    },

    page: async (obj, { page }) => {
      return await Page.model.findOne({ page })
        .exec();
    },

    pdfSheets: async (obj, { type }) => {
      return await PdfSheet.model.find({
        type,
      })
        .exec();
    },
  },

  Mutation: {
    createQuote: async (_, quote) => {
      const newQuote = new Quote.model(quote);
      return await newQuote.save();
    },
  },
};

module.exports = resolvers;
