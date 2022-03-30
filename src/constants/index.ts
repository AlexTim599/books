

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


export const sortList = ["relevance ", "newest"] as const;
export type TSortList = typeof sortList[number]

// export enum categoriesList {
//   all = "all",
//   art = "art",
//   biography = "biography",
//   computers = "computers",
//   history = "history",
//   medical = "medical",
//   poetry = "poetry",
// }

// export enum sortList {
//   relevance = "relevance ",
//   newest = "newest",
// }
