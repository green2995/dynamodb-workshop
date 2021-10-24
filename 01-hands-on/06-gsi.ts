import { createDDBCommand } from "../common/createDDBCommand";

// create gsi
createDDBCommand("update-table", `
--table-name Reply
--attribute-definitions
  AttributeName=PostedBy,AttributeType=S
  AttributeName=ReplyDateTime,AttributeType=S
--global-secondary-index-updates '[{
  "Create": {
    "IndexName": "PostedBy-ReplyDateTime-gsi",
    "KeySchema": [
      {
        "AttributeName": "PostedBy",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "ReplyDateTime",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "Projection": {
      "ProjectionType": "ALL"
    }
  }
}]'
`)

// query using gsi
createDDBCommand("query", `
--table-name Reply
--index-name PostedBy-ReplyDateTime-gsi
--key-condition-expression "PostedBy = :user"
--expression-attribute-values '{
  ":user": {"S": "User A"}
}'
`)

// remove gsi
createDDBCommand("update-table", `
--table-name Reply
--global-secondary-index-updates '[
  {
    "Delete": {
      "IndexName": "PostedBy-ReplyDateTime-gsi"
    }
  }
]'
`)