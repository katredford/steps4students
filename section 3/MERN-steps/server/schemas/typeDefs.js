//? STEP-3 import the gql tagged template function
const { gql } = require('apollo-server-express');

//? STEP-3  create our typeDefs
// TODO STEP-4 
// TODO dont put notes inside backticks
const typeDefs = gql`
  type Thought {
  _id: ID
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
}

  type Query {
  thoughts: [Thought]
}
`;

//? STEP-3  export the typeDefs
module.exports = typeDefs;