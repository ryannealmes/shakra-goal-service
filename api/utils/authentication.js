const jwt = require('jsonwebtoken')
const AuthError = require('../errors/authError')
const request = require('graphql-request').request

const getIdToken = async ctx => {
  const Authorization = ctx.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const publicKey = await requestPublicKey()
    return jwt.verify(token, publicKey)
  }

  throw new AuthError()
}

const authenticateUser = getIdToken

const requestPublicKey = async () => {
  const query = `{
    publicKey
  }`

  // TODO extract user service url into it's own service
  const payload = await request('http://localhost:4000', query)
  return payload.publicKey
}

module.exports = {
  getIdToken,
  authenticateUser
}
