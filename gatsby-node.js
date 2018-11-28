/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
// const slugifyPost = require('./slugifyPost');

exports.createPages = async ({graphql, actions: { createPage}}) => {
  const result = await graphql(`
  {
    postgres {
      posts: allPostsList {
        id
        title
        body
      }
    }
  }
  `)

  result.data.postgres.posts.forEach(post => {
    createPage({
      path: `posts/${post.id}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        postId: post.id,
      },
    });
  });

}