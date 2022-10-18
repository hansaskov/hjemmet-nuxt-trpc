import type { inferAsyncReturnType } from '@trpc/server'
import trpc from '@trpc/server'
import { z, ZodError } from 'zod' //  yup/superstruct/zod/myzod/custom
import { PrismaClient } from '@prisma/client'
import { prisma } from '..'

export const wishes = trpc.router()
  
  .query('getWishes', {
    async resolve(req) {
      return await prisma.user.findMany()
    },
  })

  .query('getWish', {

    // Validate id as a whole number
    input: z.object({
      id: z.number().int()
    }),

    async resolve(req) {
      return await prisma.user.findUnique({where: {id: req.input.id}})
    },
  })
