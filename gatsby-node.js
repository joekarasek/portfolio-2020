const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

// Updates the Webpack config
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// Hooks into the node creation lifecycle for Gatsby
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'ProjectsJson') {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// Hooks into the page creation lifecycle for Gatsby
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allProjectsJson {
        nodes {
          client
          deliverables
          description
          id
          images {
            alt
            url
          }
          links {
            link
            title
            url
          }
          tech
          title
          fields {
            slug
          }
        }
      }
    }
  `);
  result.data.allProjectsJson.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project.jsx`),
      context: {
        slug: node.fields.slug,
        ...node
      },
    })
  })
};
