import { orderBy, compare } from "natural-orderby";
export const sort = (sortBy: string, data: Array<Array<String>>) => {
  switch (sortBy) {
    case "FILE_NAME_ASC":
      return orderBy(data, [(o) => o[1]], ["asc"]);
    case "FILE_NAME_DESC":
      return orderBy(data, [(o) => o[1]], ["desc"]);
    case "CREATED_AT_ASC":
      return orderBy(data, [(o) => o[0]], ["asc"]);
    default:
      return data;
  }
};
