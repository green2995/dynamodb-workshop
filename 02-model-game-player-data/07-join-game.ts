import { createDDBCommand } from "../common/createDDBCommand";

const GAME_ID = "c6f38a6a-d1c5-4bdf-8468-24692ccc4646";
const USERNAME = "vlopez";

createDDBCommand("transact-write-items", `
--transact-items '[
  {
    "Put": {
      "TableName": "battle-royale",
      "Item": {
        "PK": {"S": "GAME#${GAME_ID}"},
        "SK": {"S": "USER#${USERNAME}"},
        "game_id": {"S": "${GAME_ID}"},
        "username": {"S": "${USERNAME}"}
      },
      "ConditionExpression": "attribute_not_exists(SK)",
      "ReturnValuesOnConditionCheckFailure": "ALL_OLD"
    }
  },
  {
    "Update": {
      "TableName": "battle-royale",
      "Key": {
        "PK": {"S": "GAME#${GAME_ID}"},
        "SK": {"S": "#METADATA#${GAME_ID}"}
      },
      "UpdateExpression": "SET people = people + :p",
      "ConditionExpression": "people <= :limit",
      "ExpressionAttributeValues": {
        ":p": {"N": "1"},
        ":limit": {"N": "50"}
      },
      "ReturnValuesOnConditionCheckFailure": "ALL_OLD"
    }
  }
]'
`)
