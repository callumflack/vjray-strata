const Schema = `
  type Markdown {
    md: String,
    html: String,
  }

  type Post {
    _id: String!,
    slug: String,
    title: String,
    featureImage: CloudinaryImage,
    content: Markdown,
    description: String,
    createdAt: String,
  }

  type CloudinaryImage {
    secure_url: String,
  }

  type File {
    url: String,
  }

  type Testimonial {
    _id: String!,
    name: String,
    quote: String,
    location: String,
    date: String,
    createdAt: String,
  }

  type Guide {
    _id: String!,
    title: String,
    featureImage: CloudinaryImage,
    file: File,
    createdAt: String,
  }

  type PdfSheet {
    _id: String!,
    file: File,
    type: String,
    headline: String,
    subheadline: String,
    createdAt: String,
  }

  type Who {
    post: String,
  }

  type Page {
    _id: String!,
    who: Who,
  }

  type Query {
    post(slug: String!): Post,
    posts(limit: Int): [Post],
    guides(limit: Int, primary: Boolean, featured: Boolean): [Guide],
    page(page: String!): Page,
    pdfSheets(type: String!): [PdfSheet],
    testimonials(limit: Int, featured: Boolean): [Testimonial],
  }

  type Quote {
    _id: String,
  }

  type Mutation {
    createQuote(
      name: String!,
      phoneNumber: String!,
      email: String,
      address: String,
      postcode: String,
      unitsInScheme: Int,
      comments: String,
    ): Quote,
  }
`;

module.exports = Schema;
