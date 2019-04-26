module.exports = () => `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    allUsers: [User!]!
  }
`;
