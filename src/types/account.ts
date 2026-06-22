export type AccountCategory = "자산" | "부채" | "자본" | "수익" | "비용";

export type AccountEntry = {
  id: string;
  name: string;
  category: AccountCategory;
  subcategory?: string;
  definition: string;
  normalBalance: "차변" | "대변";
  relatedAccounts?: string[];
  comparedWith?: {
    account: string;
    difference: string;
  }[];
  relatedProblemTopics?: string[];
};
