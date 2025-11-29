import chalk from "chalk";
import handle from "./handle.js";

// createPassword aceita `options` para execução não-interativa
async function createPassword(options) {
  console.log(chalk.green("password"));
  const password = await handle(options);
  console.log(password);
  return password;
}

export default createPassword;
