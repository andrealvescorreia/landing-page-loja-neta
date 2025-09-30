export const categories = [
  "Moda Feminina",
  "Moda Masculina",
  "Kids",
  "Casa",
  "Cosméticos"
] as const;

export type CategoryType = typeof categories[number]