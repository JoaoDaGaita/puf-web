import bcrypt from 'bcrypt'
import { omit } from 'ramda'
import { prisma } from '~/data'

const passwordCheck = async (params, next) => {
  const { password: passwordPlainText, ...where } = params.args.where

  const result = await next(
    {
      ...params,
      args: {
        ...params.args,
        where,
      },
    },
    next
  )

  if (!result) {
    return result
  }

  const { password, ...user } = result
  const passwordEqual = await bcrypt.compare(passwordPlainText, password)

  if (!passwordEqual) {
    return false
  }

  return user
}

prisma.$use(async (params, next) => {
  if (params.model !== 'User') {
    return next(params, next)
  }

  if (params.action !== 'findUnique') {
    return next(params, next)
  }

  const result = params.args.where.password
    ? await passwordCheck(params, next)
    : await next(params, next)

  if (result) {
    return omit(['password'], result)
  }

  return result
})

export const findUnique = prisma.User.findUnique
export const findMany = prisma.User.findMany
export const create = prisma.User.create
export const update = prisma.User.update
export const remove = prisma.User.delete
