const auth = require('../../utils').authentication

module.exports = {
  goals: async (parent, args, ctx, info) => {
    if (await auth.authenticateUser(ctx)) return ctx.connectors.goalService.query.goals({}, info)
  }
}
