import path from "path"
import fs from "fs"

const origin = fs.readFileSync(path.resolve(__dirname, "./data.json"), "utf-8");
const putRequests = JSON.parse(origin)["battle-royale"] as object[];
const requests = putRequests.map((obj: any) => {
  const item = obj["PutRequest"]["Item"];
  const mappedItem = {} as any;
  for (const key in item) {
    const val = item[key as keyof typeof item];
    let type = "S";

    if (typeof val === "number") {
      type = "N";
    }

    mappedItem[key] = {
      [type]: String(val),
    }
  }

  return {
    PutRequest: {
      Item: mappedItem
    }
  }
});
const mapped = {"battle-royale": requests}

fs.writeFile(path.resolve(__dirname, "./mapped.json"), JSON.stringify(mapped), (err) => {
  if (err) throw err;
})