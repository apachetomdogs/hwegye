export type JournalLine = {
  account: string;
  amount: number;
};

export type JournalProblem = {
  id: string;
  level: "intro" | "basic" | "intermediate" | "exam";
  certificate: "전산회계2급" | "전산회계1급";
  topic: string;
  sourceType: "original" | "past_exam";
  question: string;
  debitAnswer: JournalLine[];
  creditAnswer: JournalLine[];
  cautionAnswers?: {
    debit: JournalLine[];
    credit: JournalLine[];
    message: string;
  }[];
  explanation: string;
  relatedAccounts: string[];
};

export type GradingResult = "correct" | "caution" | "wrong";

export type WrongNote = {
  problemId: string;
  result: "caution" | "wrong";
  solvedAt: string;
  userDebit: JournalLine[];
  userCredit: JournalLine[];
};
