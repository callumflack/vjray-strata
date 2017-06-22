const Schema = `
  type Markdown {
    md: String,
    html: String,
  }

  type Post {
    _id: String!,
    slug: String,
    title: String,
    content: Markdown,
    description: String,
    createdAt: String,
  }

  type CloudinaryImage {
    secure_url: String,
  }

  type File {
    filename: String,
  }

  type Guide {
    _id: String!,
    title: String,
    featureImage: CloudinaryImage,
    file: File,
    createdAt: String,
  }

  type Query {
    post(slug: String!): Post,
    posts(limit: Int): [Post],
    guides(limit: Int): [Guide],
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
