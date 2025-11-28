// CASOS DE USO DOS ITENS

// -> criar item com subtotal certo e validações
function createItem(name, price, quantity = 1) {
  if (typeof name !== 'string' || name.trim() === '') throw new TypeError('name deve ser string não vazia');
  const p = Number(price);
  const q = Number(quantity);
  if (!isFinite(p) || p < 0) throw new TypeError('price deve ser número não-negativo');
  if (!Number.isInteger(q) || q <= 0) throw new TypeError('quantity deve ser inteiro positivo');

  return {
    name: name.trim(),
    price: p,
    quantity: q,
    subtotal: () => p * q,
  };
}

export default createItem;
