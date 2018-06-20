const auth = require('../../utils').authentication

module.exports = async (root, args, ctx) => {
  if (auth.authenticateUser(ctx))
    return await ctx.connectors.goalService.mutation.createGoal({
      data: {
        ...args.input
      }
    })
}
