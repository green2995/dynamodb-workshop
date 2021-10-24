import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("update-table", `
--table-name battle-royale
--attribute-definitions
    AttributeName=PK,AttributeType=S
    AttributeName=SK,AttributeType=S
--global-secondary-index-updates '[
  {
    "Create": {
      "IndexName": "InvertedIndex",
      "KeySchema": [
        {
          "AttributeName": "SK",
          "KeyType": "HASH"
        },
        {
          "AttributeName": "PK",
          "KeyType": "RANGE"
        }
      ],
      "Projection": {
        "ProjectionType": "ALL"
      },
      "ProvisionedThroughput": {
        "ReadCapacityUnits": 1,
        "WriteCapacityUnits": 1
      }
    }
  }
]'
`)
