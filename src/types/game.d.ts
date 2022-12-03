import { z } from "zod";

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