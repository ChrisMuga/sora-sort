"use client";

import { useEffect, useState } from "react";
import { ParseResult } from "papaparse";

import { readCSV } from "../../helpers";

import styles from "./index.module.css";
import { sort } from "./helpers/sort";

export default function CSVPage() {
  const [data, setData] = useState<Array<Array<String>>>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data: parsedData }: ParseResult<Array<String>> = await readCSV();

      if (parsedData.length) {
        setData(parsedData);
      }
    };

    fetch();
  }, []);

  return (
    <div className={styles.container}>
      <select
        name="sortCriteria"
        onChange={(e) => setData(sort(e.target.value, data))}
      >
        <option>---</option>
        <option value={"CREATED_AT_ASC"}>Sort by Created At</option>
        <option value={"FILE_NAME_ASC"}>Sort by File Name Ascending</option>
        <option value={"FILE_NAME_DESC"}>Sort by File Name Descending</option>
      </select>
      <div className={styles.list}>
        {data?.map((a, b: number) => (
          <div key={b}>
            {a.map((x, y: number) => (
              <div key={y}>{x}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
