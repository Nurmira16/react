export const useSort = (arr, type) => {
  const sort = (type) => {
    switch (type) {
      case "asc":
        return arr.sort((a, b) => a.age - b.age);
      case "des":
        return arr.sort((a, b) => b.age - a.age);
      case "letter":
        return arr.sort((a, b) => a.title.localeCompare(b.title));
    }
  };
  const sortedArray = sort(type);
  return { sortedArray, old: arr };
};
