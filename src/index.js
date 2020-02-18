const {ApolloServer} = requiere('apollo-server');

const typeDefs = require('./Graphql/typeDefs');
const resolvers = require('./Graphql/resolvers');

const server = new ApolloServer({typeDefs,resolvers});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`Servidor Corriendo en: ${url}`);
  });