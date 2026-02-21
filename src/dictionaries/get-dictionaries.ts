// dictionaries/get-dictionaries.ts

const dictionaries = {
  pt: () => import("./pt.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "pt" | "en") => {
  return dictionaries[locale]();
};
