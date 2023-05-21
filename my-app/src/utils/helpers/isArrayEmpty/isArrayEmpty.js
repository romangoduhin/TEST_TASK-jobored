export const isArrayEmpty = (arr) => {
  if (!Array.isArray(arr)) return false;

  return arr.length === 0
};