//create a custom hook
import { useState } from "react";
import type { z } from "zod";
import type { createGameInputType } from "../types/game";

type createGame = z.infer<typeof createGameInputType>;



const useQuestion = () => {
    const [questions, setQuestions] = useState<createGame>(
        {
            name: "",
            questions: []
        }
    );

    const addQuestion = (question: createGame["questions"][0]) => {
        setQuestions((prev) => ({
            ...prev,
            questions: [...prev.questions, question]
        }));
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

    const changeName = (name: string) => {
        setQuestions({
            ...questions,
            name
        })
    }


    return [questions, addQuestion, changeQuestion, changeName, removeQuestion] as const;
}

export default useQuestion;