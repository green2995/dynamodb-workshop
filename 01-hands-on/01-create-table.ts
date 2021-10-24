import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("create-table", `
--table-name ProductCatalog \
--attribute-definitions \
    AttributeName=Id,AttributeType=N \
--key-schema \
    AttributeName=Id,KeyType=HASH \
--provisioned-throughput \
    ReadCapacityUnits=10,WriteCapacityUnits=5
`)

createDDBCommand("create-table", `
--table-name Forum \
--attribute-definitions \
    AttributeName=Name,AttributeType=S \
--key-schema \
    AttributeName=Name,KeyType=HASH \
--provisioned-throughput \
    ReadCapacityUnits=10,WriteCapacityUnits=5
`)

createDDBCommand("create-table", `
--table-name Thread \
--attribute-definitions \
    AttributeName=ForumName,AttributeType=S \
    AttributeName=Subject,AttributeType=S \
--key-schema \
    AttributeName=ForumName,KeyType=HASH \
    AttributeName=Subject,KeyType=RANGE \
--provisioned-throughput \
    ReadCapacityUnits=10,WriteCapacityUnits=5
`)

createDDBCommand("create-table", `
--table-name Reply \
--attribute-definitions \
    AttributeName=Id,AttributeType=S \
    AttributeName=ReplyDateTime,AttributeType=S \
--key-schema \
    AttributeName=Id,KeyType=HASH \
    AttributeName=ReplyDateTime,KeyType=RANGE \
--provisioned-throughput \
    ReadCapacityUnits=10,WriteCapacityUnits=5
`)