// ~/utils/trpc.ts
import type { router } from '../server/trpc/index'

type AppRouter = typeof router

/**
 * Enum containing all api query paths
 */
export type TQuery = keyof AppRouter['_def']['queries']

/**
 * Enum containing all api mutation paths
 */
export type TMutation = keyof AppRouter['_def']['mutations']

/**
 * Enum containing all api subscription paths
 */
export type TSubscription = keyof AppRouter['_def']['subscriptions']
