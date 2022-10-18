import trpc from '@trpc/server'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

import { users } from './routes/users'
import { wishes } from './routes/wishes'

export const router = trpc.router()
  .merge('user.', users) // prefix user procedures with "user."
  .merge('post.', wishes) // prefix post procedures with "post."

