const { GraphQLServer } = require("graphql-yoga");
const getTypeDefs = require("./types");
const getResolvers = require("./types");

module.exports = new GraphQLServer({
  typeDefs: getTypeDefs(),
  resolvers: getResolvers
});
