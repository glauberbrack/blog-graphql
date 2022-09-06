const { loadFileSync } = require("@graphql-tools/load-files");
const { mergeResolvers } = require("@graphql-tools/merge");

const path = require("path");

// This const will map all resolvers
const resolversArray = loadFileSync(path.join(__dirname, "./"), {
  ignoreIndex: true,
});

const resolvers = mergeResolvers(resolversArray);
module.exports = resolvers;
