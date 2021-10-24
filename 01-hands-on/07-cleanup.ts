import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("delete-table", `
--table-name ProductCatalog
`)

createDDBCommand("delete-table", `
--table-name Forum
`)

createDDBCommand("delete-table", `
--table-name Thread
`)

createDDBCommand("delete-table", `
--table-name Reply
`)