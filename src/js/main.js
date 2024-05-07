import noImage from "../images/not-found33.png";
import { generateStarRating } from "./ratingStars";
import { countItemsInCart } from "./cart";

const url = "https://www.googleapis.com/books/v1/volumes";
const apiKey = "AIzaSyAaZnO9mYIxVejwU9xpqHTiMDZ8xuI6gwg";
let httpRequestParam = {
	category: "Architecture",
	startIndex: 0,
	maxResults: 6,
	langRestrict: "en",
};

window.addEventListener("beforeunload", () => {
	localStorage.clear();
});

const loadMoreBtn = document.querySelector(".load-more__btn");

const useRequest = () => {
	const link = `${url}?q=subject:${httpRequestParam.category}&key=${apiKey}&printType=books&startIndex=${httpRequestParam.startIndex}&maxResults=${httpRequestParam.maxResults}&langRestrict=${httpRequestParam.langRestrict}`;
	return link;
};

const localCart = JSON.parse(localStorage.getItem("cart") ?? "[]")

const fetchData = async () => {
	try {
		httpRequestParam.startIndex = 0;
		const response = await fetch(useRequest());
		const data = await response.json();
		clearBooksSection();
		getValues(data.items);
	} catch (error) {
		console.log(error.message);
	}
};

const loadMoreBooks = async () => {
	try {
		httpRequestParam.startIndex += httpRequestParam.maxResults;
		const response = await fetch(useRequest());
		const data = await response.json();
		getValues(data.items);
	} catch (error) {
		console.log(error.message);
	}
};

const truncateDescription = (description, maxLength) => {
	if (!description) {
		return "Description not available";
	}
	if (description.length > maxLength) {
		return description.substring(0, maxLength - 3) + "...";
	} else {
		return description;
	}
};

const truncateName = (title, maxLength) => {
	if (!title) {
		return "Title not available";
	}
	if (title.length > maxLength) {
		return title.substring(0, maxLength - 3) + "...";
	} else {
		return title;
	}
};

const getValues = (items) => {
	const booksSection = document.querySelector(".books-section");

	items.forEach((item) => {
		const bookElement = document.createElement("div");
		bookElement.classList.add("book");

		const volumeInfo = item.volumeInfo;
		const title = truncateName(volumeInfo.title, 40);
		const authors = volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown Author";
		const description = truncateDescription(volumeInfo.description, 90);
		let thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : noImage;
		const rating = volumeInfo.averageRating || "No rating";
		const ratingsCount = volumeInfo.ratingsCount ? `${volumeInfo.ratingsCount} review` : "No reviews";
		const price = volumeInfo.saleInfo && volumeInfo.saleInfo.retailPrice ? volumeInfo.saleInfo.retailPrice.amount : "Price not available";

		bookElement.innerHTML = `
               <div class="book-block__cover">
                  <img src="${thumbnail}" alt="Book cover">
               </div>
               <div class="book-block__info">
                  <p class="book-block__autor">${authors}</p>
                  <p class="book-block__book-name">${title}</p>
                  <div class="book-block__rating-info">
                        ${generateStarRating(rating)} ${ratingsCount} 
                  </div>
                  <p class="book-block__book-description">${description}</p>
                  <p class="book-block__price">${price}</p>
                  <button class="book-block__btn" data-id="${item.id}" type="button">buy now</button>
            </div>
      `;

		booksSection.appendChild(bookElement);
	});

	const buyButtons = document.querySelectorAll(".book-block__btn");
	buyButtons.forEach(button => {
		button.addEventListener("click", () => {
			const bookId = button.getAttribute("data-id");
			localCart.push(bookId);
			localStorage.setItem("cart", JSON.stringify(localCart));
			alert("Book added to cart");
			countItemsInCart();
		});
	});
};

const clearBooksSection = () => {
	const booksSection = document.querySelector(".books-section");
	booksSection.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
	const firstListItem = document.querySelector(".sidebar__categories-list li");
	if (firstListItem) {
		firstListItem.classList.add("active");
		httpRequestParam.category = firstListItem.textContent;
		fetchData();
	}

});

document.querySelector(".sidebar__categories-list").addEventListener("click", (event) => {
	if (event.target.tagName === "LI") {
		document.querySelectorAll(".sidebar__categories-list li").forEach((li) => {
			li.classList.remove("active");
		});
		event.target.classList.add("active");
		httpRequestParam.category = event.target.textContent;
		fetchData();
	}
});

console.log("Извлекаем из localStorage:", localCart);


document.addEventListener("DOMContentLoaded", fetchData);
loadMoreBtn.addEventListener("click", loadMoreBooks);




