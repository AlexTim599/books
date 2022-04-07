

export const categoriesList = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
] as const;
export type TCategoriesList = typeof categoriesList[number]


export const sortList = ["relevance", "newest"] as const;
export type TSortList = typeof sortList[number]

