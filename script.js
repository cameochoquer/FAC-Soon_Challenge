const stock = [{
  product: 'Waxed Cotton Hooded Jacket',
  description: 'The Drumming jacket in orange is finished with a water-repellent dry wax treatment that creates a love-worn look. It\'s made in the United Kingdom using organic cotton ripstop with a drawstring hood, underarm eyelets and buttoned flap front pockets. Shoulder epaulettes add a utilitarian twist, while a fly-fronted zip and snap-button closure keeps the overall look streamlined. Attach one of the collection\'s padded liners to the internal tab on cooler days.',
  price: '£650.00',
  count: 10
}];
document.getElementById("product-name").innerText = stock[0].product;
document.getElementById("description").innerText = stock[0].description;
document.getElementById("stock-count").innerText = stock[0].count;
document.getElementById("price").innerText = stock[0].price;


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
  n = Math.max(n - 1, 0);
  quantity.innerText = n.toString();
};

plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);

const addToBasket = () => {
  let basketNumber = (+basketQuantity.innerText);
  let quantityNumber = (+quantity.innerText);
  basketQuantity.innerText = basketNumber + quantityNumber;
};

addButton.addEventListener("click", addToBasket);

