import React from "react";
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout";

export default ({ data }) => {
  const { post } = data.postgres;
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Link to="/page-2">Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  query($postId: Int!) {
    postgres {
      post: postById(id: $postId) {
        id
        title
        body
      }
    }
  }
`;