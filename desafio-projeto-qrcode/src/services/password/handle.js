import permittedCharacters from "./utils/permitted-characters.js";

// handle aceita um objeto `options` para modo não-interativo
async function handle(options = {}) {
  let characters = [];
  let password = "";

  const passwordLength = Number(options.length ?? process.env.PASSWORD_LENGTH) || 8;
  characters = await permittedCharacters(options);

  // fallback: se nenhum caractere permitido, usar alfanum
  if (!characters || characters.length === 0) {
    characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
