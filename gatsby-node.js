/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/covid-19/status',
    component: require.resolve('./src/templates/stateSiteTemplate.jsx'),
    context: { query: 'status' }
  });
  createPage({
    path: '/covid-19/testing',
    component: require.resolve('./src/templates/testingSiteTemplate.jsx'),
    context: { query: 'testing' }
  });
};
