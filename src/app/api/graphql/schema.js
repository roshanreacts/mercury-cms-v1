import { gql } from "graphql-tag";


const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
  type Mutation {
    login(email: String!, password: String!):Response
  }
  type Response {
    message: String,
    token: String,
  }
`;
export default typeDefs;
