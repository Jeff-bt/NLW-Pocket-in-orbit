import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../function/get-week-pending-goal'
import { getWeekSummary } from '../../function/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async () => {
    const { summary } = await getWeekSummary()

    return { summary }
  })
}
