import { createDDBCommand } from "../common/createDDBCommand";

const GAME_ID = "3d4285f0-e52b-401a-a59b-112b38c4a26b";

// first entry is game entity
// and the rest is user entities
createDDBCommand("query", `
--table-name battle-royale
--key-condition-expression
  "PK = :pk AND SK BETWEEN :metadata AND :users"
--expression-attribute-values '{
  ":pk": {"S": "GAME#${GAME_ID}},
  ":metadata": {"S": "#METADATA#${GAME_ID}"},
  ":users": {"S": "USER$"}
}'
--scan-index-forward
`)