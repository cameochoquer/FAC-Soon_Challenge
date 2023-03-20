const plusButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const basketQuantity = document.getElementById("basket-quantity");
const addButton = document.getElementById("add-to-basket");

let n = 0;
const quantity = document.getElementById("amount-added");

const plus = () => {
  n += 1;
  quantity.innerText = n.toString();
};

const minus = () => {
  n = Math.max(n-1,0)
  quantity.innerText = n.toString();
};

plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);


const addToBasket = () => {
basketQuantity.innerText = quantity;
};

addButton.addEventListener("click",addToBasket);