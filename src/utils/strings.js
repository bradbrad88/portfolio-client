export const capitalizeEachWord = string => {
  if (!string) return "";
  if (typeof string !== "string") return "";
  return string
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
