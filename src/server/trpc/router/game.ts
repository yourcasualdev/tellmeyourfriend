import { z } from "zod";
import { prisma } from "../../db/client";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const createGameInputType = z.object({
    name: z.string(),
    questions: z.array(
        z.object({
            question: z.string(),
            answers: z.array(z.object({
                answer: z.string(),
                isCorrect: z.boolean()
            }))
        })
    ),
});

export const gameRouter = router({
    getAll: protectedProcedure
        .query(async ({ ctx }) => {
            const id = ctx.session.user.id
            const games = await prisma.game.findMany({
                where: {
                    userId: id
                },
                select: {
                    id: true,
                    name: true,
                    updatedAt: true,
                    createdAt: true,
                }
            });
            return {
                games
            };
        }
        ),
    createGame: protectedProcedure
        .input(createGameInputType)
        .mutation(async ({ input, ctx }) => {
            const userID = ctx.session.user.id

            await prisma.game.create({
                data: {
                    name: input.name,
                    userId: userID,
                    questions: {
                        create: input.questions.map((question) => ({
                            question: question.question,
                            answers: {
                                create: question.answers.map((answer) => ({
                                    answer: answer.answer,
                                    isCorrect: answer.isCorrect
                                }))
                            }
                        }))
                    }
                }
            });

            return {
                message: `Game created for user ${userID}`,
            };
        }
        ),
});
