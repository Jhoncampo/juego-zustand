import { create } from "zustand";
import { type Question } from "../types";
import confetti from "canvas-confetti";
import { persist, devtools } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
  sentEmail: () => void
}

export const useQuestionsStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          questions: [],
          currentQuestion: 0,
          fetchQuestions: async (limit: number) => {
            const res = await fetch("https://alura-geek-api-red.vercel.app/questions");
            const json = await res.json();
            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit);
            set({ questions }, false, "FETCH_QUESTIONS");
          },
          selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get();
            // usar el structuredClone para clonar el objeto
            const newQuestions = structuredClone(questions);
            // Encontramos el índice de la pregunta
            const questionsIndex = newQuestions.findIndex(
              (q) => q.id === questionId
            );
            // Obtenemos la información de la pregunta
            const questionInfo = newQuestions[questionsIndex];
            // Averiguamos si el usuario ha seleccionado la respuesta correcta
            const isCorrectUserAnswer =
              questionInfo.correctAnswer === answerIndex;
            if (isCorrectUserAnswer) confetti();
            // Cambiar esta inforamción en la copia de la pregunta
            newQuestions[questionsIndex] = {
              ...questionInfo,
              isCorrectUserAnswer,
              userSelectedAnswer: answerIndex,
            };

            // Actualizamos el estado
            set({ questions: newQuestions }, false, "SELECT_ANSWER");
          },
          goNextQuestion: () => {
            const { currentQuestion, questions } = get();
            const nextQuestion = currentQuestion + 1;

            if (nextQuestion < questions.length) {
              set({ currentQuestion: nextQuestion }, false, "GO_NEXT_QUESTION");
            }
          },
          goPreviousQuestion: () => {
            const { currentQuestion } = get();
            const previousQuestion = currentQuestion - 1;

            if (previousQuestion >= 0) {
              set(
                { currentQuestion: previousQuestion },
                false,
                "GO_PREVIOUS_QUESTION"
              );
            }
          },
          reset: () => {
            set({ currentQuestion: 0, questions: [] }, false, "RESET");
          },
          sentEmail: async () => {
            //await sendAnswersEmail()
            
          }
        };
      },
      { name: "questions" }
    )
  )
);
