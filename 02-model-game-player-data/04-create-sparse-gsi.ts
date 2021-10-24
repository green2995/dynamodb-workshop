import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("update-table", `
--table-name battle-royale
--attribute-definitions
    AttributeName=map,AttributeType=S
    AttributeName=open_timestamp,AttributeType=S
--global-secondary-index-updates '[
  {
    "Create": {
      "IndexName": "OpenGamesIndex",
      "KeySchema": [
        {
          "AttributeName": "map",
          "KeyType": "HASH"
        },
        {
          "AttributeName": "open_timestamp",
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

