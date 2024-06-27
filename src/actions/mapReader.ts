import * as fs from "fs";
import * as path from "path";

async function readJsonFile(filename: string): Promise<any> {
  const filePath = path.resolve(process.cwd(), "src", "map_data", filename);

  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
} catch (err: any) {
    console.log(err);
    const filePath = path.resolve(process.cwd(), "src", "map_data", "world.json");
    const data = await fs.promises.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  }
}

export default readJsonFile;
