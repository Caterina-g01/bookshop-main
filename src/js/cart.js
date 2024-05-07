const cart = document.querySelector(".nav__icon-cart-badge");

let indexCart = 0;

function countItemsInCart() {
	indexCart++;
	if (indexCart > 0) {
		cart.textContent = indexCart;
		cart.classList.add("active");
	} else {
		cart.classList.remove("active");
	}
}

export { countItemsInCart };

