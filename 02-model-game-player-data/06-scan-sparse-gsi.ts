import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("scan", `
--table-name battle-royale
--index-name OpenGamesIndex
`)
