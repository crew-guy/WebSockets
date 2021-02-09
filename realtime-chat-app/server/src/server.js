import {GraphQLServer} from 'graphql-yoga'
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation'
import messages from './db'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation
    },
    context: {
        messages
    }
})

server.start(()=> console.log('The server has started'))