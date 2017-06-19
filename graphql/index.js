const Schema = `
  type Post {
    id: String!,
    title: String,
    content: Markdown,
    description: String,
  }

  type Markdown {
    md: String,
    html: String,
  }

  type Query {
    posts(limit: Int): [Post],
    title: String,
  }
`;

module.exports = Schema;
