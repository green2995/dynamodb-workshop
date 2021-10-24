import { createDDBCommand } from "../common/createDDBCommand";

createDDBCommand("create-table", `
--table-name battle-royale
--attribute-definitions
    AttributeName=PK,AttributeType=S
    AttributeName=SK,AttributeType=S
--key-schema
    AttributeName=PK,KeyType=HASH
    AttributeName=SK,KeyType=RANGE
--provisioned-throughput
    ReadCapacityUnits=1,WriteCapacityUnits=1
`)

createDDBCommand("update-table", `
--table-name battle-royale
--provisioned-throughput
    ReadCapacityUnits=100,WriteCapacityUnits=100
`)