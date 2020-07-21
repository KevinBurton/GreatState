/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const axios = require("axios");
const createNodeHelpers = require("gatsby-node-helpers").default;

const get = endpoint => axios.get(`http://localhost:3001/api/${endpoint}`);

const getMemberData = async () => {
      const { data: members } = await get('members');
      return members;
};
const getTeamData = async () => {
  const { data: teams } = await get('teams');
  return teams;
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const { createNodeFactory } = createNodeHelpers({
    typePrefix: "Racing"
  });
  const prepareMembersNode = createNodeFactory("Members");
  const prepareTeamsNode = createNodeFactory("Teams");
  // Get all our members data
  const allMembers = await getMemberData();
  // Get all our teams data
  const allTeams = await getTeamData();
  // Process data for each member list into Gatsby node format
  const procesMembers = members => {
    // Create the "members" node
    const membersNode = prepareMembersNode(members);

    return membersNode;
  };
  // Process data for each team list into Gatsby node format
  const processTeams = teams => {
    // Create the "teams" node
    const teamsNode = prepareTeamsNode(teams);

    return teamsNode;
  };
  createNode(procesMembers(allMembers))
  createNode(processTeams(allTeams));
};
