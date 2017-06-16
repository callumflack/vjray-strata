const Schema = `
  type Post {
    id: String!,
    title: String,
    content: String,
  }

  type Query {
    posts(limit: Int): [Post],
    title: String,
  }
`;

module.exports = Schema;
