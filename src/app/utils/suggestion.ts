// import medgen from "./medgen.json";
import medicine from "./medicine.json";

interface Medicine {
  [key: string]: string;
}

// function joinSuggestion() {
//   return [...medgen, ...medicine];
// }

// console.log(medgen.length, medicine.length, joinSuggestion().length);

export function getSuggestion(query: string) {
  return query && query.length > 2
    ? (medicine as Medicine[])
        .filter((item: Medicine) =>
          item["Medicine Name"].toLowerCase().startsWith(query.toLowerCase())
        )
        .slice(0, 3)
    : [];
}

// console.log(getSuggestion("Actor"));
