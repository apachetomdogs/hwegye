import { JournalLine, GradingResult } from "../types/problem";

export function gradeAnswer(
  userDebit: JournalLine[],
  userCredit: JournalLine[],
  correctDebit: JournalLine[],
  correctCredit: JournalLine[],
  cautionAnswers?: { debit: JournalLine[]; credit: JournalLine[]; message: string }[]
): { result: GradingResult; cautionMessage?: string } {
  void userDebit;
  void userCredit;
  void correctDebit;
  void correctCredit;
  void cautionAnswers;

  // TODO: implement in Step 3
  return { result: "wrong" };
}
