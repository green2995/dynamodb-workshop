import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("put-item", `
--table-name Reply
--item '{
  "Id": {"S": "Amazon DynamoDB$DynamoDB Thread 2"},
  "ReplyDateTime": {"S": "2021-04-27T17:47:30Z"},
  "Message": {"S": "DynamoDB Thread 2 Reply 3 Text"},
  "PostedBy": {"S": "User C"}
}'
`)

createDDBCommand("update-item", `
--table-name ProductCatalog
--key '{"Id": {"N": "201"}}'
--update-expression "Set #Color = list_append(#Color, :c)"
--expression-attribute-names '{"#Color": "Color"}'
--expression-attribute-values '{
  ":c": {
    "L": [
      {"S": "GoldenRod"}
    ]
  }
}'
--return-values ALL_NEW
`)