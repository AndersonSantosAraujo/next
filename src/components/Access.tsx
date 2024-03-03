import fs from "fs/promises";

export default async function Access() {
  await fs.appendFile("Access.txt", `${Date.now()} `, "utf-8");
  const data = await fs.readFile("Access.txt", "utf-8");

  return <div>{data}</div>;
}
