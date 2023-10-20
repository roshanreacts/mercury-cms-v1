import { startServerAndCreateNextHandler } from "@as-integrations/next";
import mercury from "@mercury-js/core";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "graphql-tag";
import { applyMiddleware } from "graphql-middleware";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import "./models";
mercury.connect(process.env.DB_URL);

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: mergeTypeDefs([typeDefs, mercury.schema]),
    resolvers: mergeResolvers([resolvers, mercury.resolvers]),
  })
);

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async ({ req }) => {
    return { ...req, user: { role: "ANONYMOUS" } };
  },
});

export async function GET(request) {
  return handler(request);
}

export async function POST(request) {
  return handler(request);
}
