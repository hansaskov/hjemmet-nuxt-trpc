// ~/server/trpc/index.ts
import type { inferAsyncReturnType } from '@trpc/server'
import * as trpc from '@trpc/server'
import { z, ZodError } from 'zod' //  yup/superstruct/zod/myzod/custom
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const router = trpc.router()
  // queries and mutations...
  .query('getUsers', {
    async resolve(req) {
      return await prisma.user.findMany()
    },
  })

  .query('getUser', {

    // Validate input as a whole number
    input: z.object({
      id: z.number().int()
    }),

    async resolve(req) {
      return await prisma.user.findUnique({where: {id: req.input.id}})
    },
  })

  .mutation('createUser', {

    // validate valid email and name is larger than 5
    input: z.object({
      email: z.string().email(), 
      name: z.string().min(5), 
    }),

    async resolve(req) {
      // use your ORM of choice
      return await prisma.user.create(
        { data: req.input }
      )
    },
  })

  .formatError(({ shape, error }) => {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST'
          && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      }
    }
  })


  
