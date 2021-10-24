import { createDDBCommand } from "../common/createDDBCommand";

const GAME_ID = "c6f38a6a-d1c5-4bdf-8468-24692ccc4646";
const CREATOR = "gstanley"

createDDBCommand("update-item", `
--table-name battle-royale
--key '{
  "PK": {"S": "GAME#${GAME_ID}"},
  "SK": {"S": "#METADATA#${GAME_ID}"}
}'
--update-expression "REMOVE open_timestamp SET start_time = :time"
--condition-expression "
  people = :limit
  AND creator = :requesting_user
  AND attribute_not_exists(start_time)
"
--expression-attribute-values '{
  ":time": {"S": "${Date.now()}"},
  ":limit": {"N": "50"},
  ":requesting_user": {"S": "${CREATOR}"}
}'
--return-values "ALL_NEW"
`)