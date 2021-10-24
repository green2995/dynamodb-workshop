import { createCommand } from "./createCommand";

export function createDDBCommand(task: string, command: string) {
  return createCommand(`
    aws dynamodb ${task}
    --endpoint-url http://localhost:8000
    --region ap-northeast-2
    ${command}
  `)
}