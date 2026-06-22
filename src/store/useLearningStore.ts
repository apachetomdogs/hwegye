import { create } from "zustand";

import { WrongNote } from "../types/problem";

type LearningState = {
  wrongNotes: WrongNote[];
  totalSolved: number;
  totalCorrect: number;
  streakDays: number;
  todaySolved: number;
  todayTarget: number;
  addWrongNote: (note: WrongNote) => void;
  incrementSolved: (isCorrect: boolean) => void;
  resetTodayProgress: () => void;
};

export const useLearningStore = create<LearningState>((set) => ({
  wrongNotes: [],
  totalSolved: 0,
  totalCorrect: 0,
  streakDays: 0,
  todaySolved: 0,
  todayTarget: 10,
  addWrongNote: (note) =>
    set((state) => ({
      wrongNotes: [note, ...state.wrongNotes],
    })),
  incrementSolved: (isCorrect) =>
    set((state) => ({
      totalSolved: state.totalSolved + 1,
      totalCorrect: isCorrect ? state.totalCorrect + 1 : state.totalCorrect,
      todaySolved: state.todaySolved + 1,
    })),
  resetTodayProgress: () =>
    set({
      todaySolved: 0,
    }),
}));
