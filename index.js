const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const typeDefs = require('./graphql/typeDefs')
const moongoose = require('mongoose');
const { MONGODB } = require('../ReactApp/config');
const resolvers = require('./graphql/resolvers');




const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});

moongoose.connect(MONGODB, { useNewUrlParser: true})
.then(() => {
 console.log('mongoDB connected')
 return server.listen({port: 8000});
})
.then(res=> {
    console.log('Server running at port 8000')
});