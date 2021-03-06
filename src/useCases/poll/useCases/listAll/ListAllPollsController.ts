import { Request, Response } from 'express'

import { PollRepository } from '../../../../repositories/prisma/PollsRepository'

import { ListAllPollsUseCase } from './ListAllPollsUseCase'

export class ListAllPollsController {
  async handle(req: Request, res: Response) {
    const pollsRepository = new PollRepository()
    const listAllPollsUseCase = new ListAllPollsUseCase(pollsRepository)

    const polls = await listAllPollsUseCase.execute()

    return res.status(200).json(polls)
  }
}
