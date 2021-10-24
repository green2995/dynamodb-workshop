import { createDDBCommand } from "../common/createDDBCommand";

const USERNAME = "carrpatrick";

createDDBCommand("query", `
--table-name battle-royale
--index-name InvertedIndex
--key-condition-expression "SK = :sk"
--expression-attribute-values '{
  ":sk": {"S": "USER#${USERNAME}"}
}'
--scan-index-forward
`)
