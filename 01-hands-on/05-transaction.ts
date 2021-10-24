import { createDDBCommand } from "../common/createDDBCommand";

// subsequent request with same token will be ignored, for 10 minutes
createDDBCommand("transact-write-items", `
--client-request-token TRANSACTION1
--transact-items '[
  {
    "Put": {
      "TableName" : "Reply",
      "Item" : {
        "Id" : {"S": "Amazon DynamoDB#DynamoDB Thread 2"},
        "ReplyDateTime" : {"S": "2021-04-27T17:47:30Z"},
        "Message" : {"S": "DynamoDB Thread 2 Reply 3 text"},
        "PostedBy" : {"S": "User C"}
      }
    }
  },
  {
    "Update": {
      "TableName" : "Forum",
      "Key" : {"Name" : {"S": "Amazon DynamoDB"}},
      "UpdateExpression": "ADD Messages :inc",
      "ExpressionAttributeValues" : { ":inc": {"N" : "1"} }
    }
  }
]'
`)


createDDBCommand("transact-write-items", `
--client-request-token TRANSACTION2
--transact-items '[
  {
      "Delete": {
          "TableName" : "Reply",
          "Key" : {
              "Id" : {"S": "Amazon DynamoDB#DynamoDB Thread 2"},
              "ReplyDateTime" : {"S": "2021-04-27T17:47:30Z"}
          }
      }
  },
  {
      "Update": {
          "TableName" : "Forum",
          "Key" : {"Name" : {"S": "Amazon DynamoDB"}},
          "UpdateExpression": "ADD Messages :inc",
          "ExpressionAttributeValues" : { ":inc": {"N" : "-1"} }
      }
  }
]'
`)