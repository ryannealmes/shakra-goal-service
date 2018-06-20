const {
  Prisma
} = require('prisma-binding')

module.exports = {
  goalService: new Prisma({
    typeDefs: './generated/prisma.graphql',
    endpoint: 'http://localhost:4466/goal-service/development'
  })
}
