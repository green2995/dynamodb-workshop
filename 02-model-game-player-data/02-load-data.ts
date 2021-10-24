import path from "path";
import AWS from "aws-sdk";
import fs from "fs";

const ddb = new AWS.DynamoDB({
    endpoint: "http://localhost:8000",
    region: "ap-northeast-2",
})

const docClient = new AWS.DynamoDB.DocumentClient({
    endpoint: "http://localhost:8000",
    region: "ap-northeast-2",
});

const data = fs.readFileSync(path.resolve(__dirname, "./mapped.json"), "utf-8");
const json: RootObject = JSON.parse(data);

(async () => {
    const interval = 25;
    for (let i = 0; i < json["battle-royale"].length; i += interval) {
        const chunk = json["battle-royale"].slice(i, i + interval);
        await ddb.batchWriteItem({
            RequestItems: {
                //@ts-ignore
                "battle-royale": chunk
            }
        }, (err, data) => {
            if (err) {
                console.log(chunk);
                throw err;
            }
            console.log(data);
        }).promise();
    }
})();


interface RootObject {
    'battle-royale': Battleroyale[];
}

interface Battleroyale {
    PutRequest: PutRequest;
}

interface PutRequest {
    Item: Item;
}

interface Item {
    PK: PK;
    SK: PK;
    address?: PK;
    birthdate?: PK;
    email?: PK;
    name?: PK;
    username?: PK;
    game_id?: PK;
    map?: PK;
    create_time?: PK;
    people?: People;
    open_timestamp?: PK;
    creator?: PK;
    start_time?: PK;
    end_time?: PK;
    gold?: PK;
    silver?: PK;
    bronze?: PK;
    place?: PK;
}

interface People {
    N: string;
}

interface PK {
    S: string;
}