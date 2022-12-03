//create a custom hook
import { useState } from "react";
import type { z } from "zod";
import type { createGameInputType } from "../types/game";

type createGame = z.infer<typeof createGameInputType>;

export const useQuestion = () => {
    const [questions, setQuestions] = useState<createGame>(
        {
            name: "",
            questions: [
                {
                    question: "",
                    answers: [
                        {
                            answer: "",
                            isCorrect: true
                        },
                        {
                            answer: "",
                            isCorrect: false
                        },
                    ]
                }
            ]
        }
    );

    const addQuestion = () => {
        setQuestions({
            ...questions,
            questions: [
                ...questions.questions,
                {
                    question: "",
                    answers: [
                        {
                            answer: "",
                            isCorrect: true
                        },
                        {
                            answer: "",
                            isCorrect: false
                        },
                    ]
                }
            ]
        })
    }

    const changeQuestion = (index: number, question: createGame["questions"][1]) => {
        setQuestions({
            ...questions,
            questions: [
                ...questions.questions.slice(0, index),
                question,
                ...questions.questions.slice(index + 1)
            ]
        })
    }

    const removeQuestion = (index: number) => {
        setQuestions({
            ...questions,
            questions: [
                ...questions.questions.slice(0, index),
                ...questions.questions.slice(index + 1)
            ]
        })
    }
}

