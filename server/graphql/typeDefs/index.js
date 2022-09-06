const { loadFileSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");

const path = require("path");

// This const will map all typeDefs
const typeDefsArray = loadFileSync(path.join(__dirname, "./", . '*.gql'));

const typeDefs = mergeTypeDefs(typeDefsArray);
module.exports = typeDefs;
