import { exec } from "child_process"

export function createCommand(command: string) {
  exec(command.replace(/\n/g, " "), (err, stdout, stderr) => {
    if (err) {
      const modified = err;
      modified.cmd = err.cmd?.trim().replace(/\s+--/g, "\n--").replace(/\s{4,}/g, "\n    ")
      console.log("err", modified)
    };
    if (stdout) console.log("stdout", stdout);
    if (stderr) console.log("stderr", stderr);
  })
}
