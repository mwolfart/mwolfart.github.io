export const getLanguageLabel = (language: string) => {
  switch (language) {
    case "en":
    case "en-US":
      return "EN";
    case "pt":
    case "pt-BR":
      return "PT";
    default:
      return "EN";
  }
};
