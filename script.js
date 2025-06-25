let cart = [];

function addToCart(itemName, itemPrice) {
  const item = cart.find(i => i.name === itemName);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");


  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
    count += item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}

document.getElementById("cart-btn").addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.toggle("open");
});

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  updateCart();
  document.getElementById("cart-sidebar").classList.remove("open");
}