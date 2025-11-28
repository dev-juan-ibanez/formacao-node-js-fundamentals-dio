// Ações do carrinho: funções síncronas e com validações simples

function formatCurrency(value) {
  try {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  } catch (e) {
    return `R$ ${Number(value).toFixed(2)}`;
  }
}

// ✅ -> adicionar item no carrinho
function addItem(userCart, item) {
  if (!Array.isArray(userCart)) throw new TypeError('userCart deve ser um array');
  if (!item || typeof item.name !== 'string') throw new TypeError('item inválido');

  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
function calculateTotal(userCart) {
  if (!Array.isArray(userCart)) throw new TypeError('userCart deve ser um array');

  console.log('\nShopee Cart TOTAL:');
  const total = userCart.reduce((acc, item) => acc + Number(item.subtotal()), 0);
  console.log(`🎁 Total: ${formatCurrency(total)}`);
  return total;
}

// -> deletar item do carrinho (por nome)
function deleteItem(userCart, name) {
  if (!Array.isArray(userCart)) throw new TypeError('userCart deve ser um array');
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    const [removed] = userCart.splice(index, 1);
    return removed;
  }

  return null;
}

// -> remover uma unidade do item
function removeItem(userCart, item) {
  if (!Array.isArray(userCart)) throw new TypeError('userCart deve ser um array');
  if (!item || typeof item.name !== 'string') {
    console.log('item inválido');
    return;
  }

  const idx = userCart.findIndex((p) => p.name === item.name);
  if (idx === -1) {
    console.log('item não encontrado');
    return;
  }

  const cartItem = userCart[idx];
  if (cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  } else {
    userCart.splice(idx, 1);
  }
}

// ✅ mostra todos os items do carrinho
function displaycart(userCart) {
  if (!Array.isArray(userCart)) throw new TypeError('userCart deve ser um array');

  console.log('\nShopee cart list:');
  if (userCart.length === 0) {
    console.log('(carrinho vazio)');
    return;
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${formatCurrency(item.price)} | ${item.quantity}x | Subtotal = ${formatCurrency(
        item.subtotal()
      )}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart };
