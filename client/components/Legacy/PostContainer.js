import React from "react";
import gql from "graphql-tag";
import apollo from "../../lib/apollo";
import Post from "./Post";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 0,
      posts: [],
    };
  }

  async componentDidMount() {
    const query = gql`{
      posts(limit: ${this.state.limit}) {
        _id,
        slug,
        title,
        createdAt,
        description,
      }
    }`;

    const { data: { posts } } = await apollo.query({ query });
    this.setState({ posts });
  }

  render() {
    return <div>{this.state.posts.map((post, i) => <Post post={post} />)}</div>;
  }
}

export default PostContainer;
