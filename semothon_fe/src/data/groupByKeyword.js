import allCategories from "./categories";

const groupByKeyword = (results) => {
  const grouped = {};

  for (const result of results) {
    let matchedCategory = null;

    for (const [category, keywords] of Object.entries(allCategories)) {
      if (keywords.includes(result.keyword)) {
        matchedCategory = category;
        break;
      }
    }

    if (!matchedCategory) matchedCategory = "기타";

    if (!grouped[matchedCategory]) grouped[matchedCategory] = [];
    grouped[matchedCategory].push(result);
  }

  return grouped;
};

export default groupByKeyword;
