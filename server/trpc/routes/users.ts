import type { inferAsyncReturnType } from '@trpc/server'
import trpc from '@trpc/server'
import { z, ZodError } from 'zod' //  yup/superstruct/zod/myzod/custom
import { PrismaClient } from '@prisma/client'
import { prisma } from '..'

export const users = trpc.router()

  .query('getUsers', {
    async resolve(req) {
      return await prisma.user.findMany()
    },
  })

  .query('getUser', {
    input: z.object({
      firstName: z.string(),
      lastName: z.string()
    }),
    async resolve(req) {
      return await prisma.user.findUnique({
        where: {
          firstName_lastName: req.input
        }
      })
    },
  })

  .mutation('createUser', {
    input: z.object({
      email: z.string().email(),
      firstName: z.string().min(2),
      lastName: z.string().min(2),
    }),
    async resolve(req) {
      return await prisma.user.create({
        data: req.input
      })
    },
  })