"use server";

import { promises as fs } from "fs";

import Papa, { ParseResult } from "papaparse";

export const readCSV = async () => {
  const file = await fs.readFile(process.cwd() + "/data.csv", "utf8");
  const data: ParseResult<Array<String>> = Papa.parse(file, { delimiter: ";" });

  return data;
};
