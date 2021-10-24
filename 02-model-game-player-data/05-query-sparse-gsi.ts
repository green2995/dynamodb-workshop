import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("query", `
--table-name battle-royale
--index-name OpenGamesIndex
--key-condition-expression "#map = :map"
--expression-attribute-names '{
  "#map": "map"
}'
--expression-attribute-values '{
  ":map": {"S": "Green Grasslands"}
}'
`);