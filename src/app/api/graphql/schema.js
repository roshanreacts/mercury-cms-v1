import { gql } from "graphql-tag";
import { User } from '../graphql/models/User'


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
    name: String,
    email: String,
    role: String,
    id: String
  }

`;
export default typeDefs;
