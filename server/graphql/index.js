const Schema = `
  type Post {
    _id: String!,
    slug: String,
    title: String,
    content: Markdown,
    description: String,
    createdAt: String,
  }

  type Markdown {
    md: String,
    html: String,
  }

  type Query {
    post(slug: String!): Post,
    posts(limit: Int): [Post],
    title: String,
  }
`;

module.exports = Schema;
