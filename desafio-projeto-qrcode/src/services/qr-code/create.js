import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

// createQRCode aceita um objeto `options` para execução não-interativa
function createQRCode(options) {
  if (options && options.link) {
    // chamando o handler diretamente com o objeto esperado
    return handle(null, { link: options.link, type: options.type });
  }

  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCode;
