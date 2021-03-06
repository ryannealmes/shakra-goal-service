const logger = require('./utils/logger')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const connectors = require('./connectors')
require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    connectors
  }),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
})

const port = process.env.PORT
server.start({ port }, () =>
  logger.info(`The Goal Service server is running on http://localhost:${port}`)
)
