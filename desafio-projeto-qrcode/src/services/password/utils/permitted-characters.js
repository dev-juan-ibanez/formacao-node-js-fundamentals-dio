// permittedCharacters aceita `options` para modo não-interativo
async function permittedCharacters(options = {}) {
  let permitted = [];

  const useUpper = (options.UPPERCASE_LETTERS ?? process.env.UPPERCASE_LETTERS) === "true";
  const useLower = (options.LOWERCASE_LETTERS ?? process.env.LOWERCASE_LETTERS) === "true";
  const useNumbers = (options.NUMBERS ?? process.env.NUMBERS) === "true";
  const useSpecial = (options.SPECIAL_CHARACTERS ?? process.env.SPECIAL_CHARACTERS) === "true";

  if (useUpper) permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (useLower) permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  if (useNumbers) permitted.push(..."0123456789");
  if (useSpecial) permitted.push(..."!@#$%^&*()-_");

  return permitted;
}

export default permittedCharacters;
