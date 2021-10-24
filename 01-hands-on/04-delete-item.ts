import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("delete-item", `
--table-name Reply
--key '{
  "Id": {"S": "Amazon DynamoDB$DynamoDB Thread 2"},
  "ReplyDateTime": {"S": "2021-04-27T17:47:30Z"}
}'
`)

// delete operation doesn't respond with error in nature
// to create error when the item doesn't exist, need to add --condition-expression 
// for example, --condition expression "attribute_exists(Id)"