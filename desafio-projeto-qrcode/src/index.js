import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  // Modo não-interativo: usar variáveis de ambiente ou argumentos
  const args = process.argv.slice(2);
  const auto = process.env.AUTO_RUN === "true" || args.includes("--auto") || args.includes("--non-interactive");

  if (auto) {
    const tool = (process.env.TOOL || process.env.SELECT || "").toLowerCase();

    if (tool === "qrcode" || tool === "1") {
      const link = process.env.QR_LINK || process.env.LINK;
      const type = process.env.QR_TYPE || process.env.TYPE;
      await createQRCode({ link, type });
      return;
    }

    if (tool === "password" || tool === "2") {
      const options = {
        length: process.env.PASSWORD_LENGTH,
        UPPERCASE_LETTERS: process.env.UPPERCASE_LETTERS,
        LOWERCASE_LETTERS: process.env.LOWERCASE_LETTERS,
        NUMBERS: process.env.NUMBERS,
        SPECIAL_CHARACTERS: process.env.SPECIAL_CHARACTERS,
      };
      await createPassword(options);
      return;
    }

    console.log("AUTO_RUN ativo, mas variável TOOL/SELECT inválida. Use TOOL=qrcode|password ou SELECT=1|2");
    return;
  }

  // modo interativo original
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
