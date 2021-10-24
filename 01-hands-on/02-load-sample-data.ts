import { createDDBCommand } from "../common/createDDBCommand";
import path from "path"

createDDBCommand("batch-write-item", `
--request-items file://${path.resolve(__dirname, "../sampledata/Forum.json")}
`)

createDDBCommand("batch-write-item", `
--request-items file://${path.resolve(__dirname, "../sampledata/ProductCatalog.json")}
`)

createDDBCommand("batch-write-item", `
--request-items file://${path.resolve(__dirname, "../sampledata/Reply.json")}
`)

createDDBCommand("batch-write-item", `
--request-items file://${path.resolve(__dirname, "../sampledata/Thread.json")}
`)