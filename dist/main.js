/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/sass/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/index.js?");

/***/ }),

/***/ "./src/js/animationSliderModule.js":
/*!*****************************************!*\
  !*** ./src/js/animationSliderModule.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fadeIn: () => (/* binding */ fadeIn)\n/* harmony export */ });\nfunction fadeIn(element) {\r\n\tlet opacity = 0;\r\n\tconst interval = setInterval(() => {\r\n\t\topacity += 0.05;\r\n\t\telement.style.opacity = opacity;\r\n\t\tif (opacity >= 1) {\r\n\t\t\tclearInterval(interval);\r\n\t\t}\r\n\t}, 30);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/animationSliderModule.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countItemsInCart: () => (/* binding */ countItemsInCart)\n/* harmony export */ });\nconst cart = document.querySelector(\".nav__icon-cart-badge\");\r\n\r\nlet indexCart = 0;\r\n\r\nfunction countItemsInCart() {\r\n\tindexCart++;\r\n\tif (indexCart > 0) {\r\n\t\tcart.textContent = indexCart;\r\n\t\tcart.classList.add(\"active\");\r\n\t} else {\r\n\t\tcart.classList.remove(\"active\");\r\n\t}\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/cart.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_not_found33_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/not-found33.png */ \"./src/images/not-found33.png\");\n/* harmony import */ var _ratingStars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratingStars */ \"./src/js/ratingStars.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ \"./src/js/cart.js\");\n\r\n\r\n\r\n\r\nconst url = \"https://www.googleapis.com/books/v1/volumes\";\r\nconst apiKey = \"AIzaSyAaZnO9mYIxVejwU9xpqHTiMDZ8xuI6gwg\";\r\nlet httpRequestParam = {\r\n\tcategory: \"Architecture\",\r\n\tstartIndex: 0,\r\n\tmaxResults: 6,\r\n\tlangRestrict: \"en\",\r\n};\r\n\r\nwindow.addEventListener(\"beforeunload\", () => {\r\n\tlocalStorage.clear();\r\n});\r\n\r\nconst loadMoreBtn = document.querySelector(\".load-more__btn\");\r\n\r\nconst useRequest = () => {\r\n\tconst link = `${url}?q=subject:${httpRequestParam.category}&key=${apiKey}&printType=books&startIndex=${httpRequestParam.startIndex}&maxResults=${httpRequestParam.maxResults}&langRestrict=${httpRequestParam.langRestrict}`;\r\n\treturn link;\r\n};\r\n\r\nconst localCart = JSON.parse(localStorage.getItem(\"cart\") ?? \"[]\")\r\n\r\nconst fetchData = async () => {\r\n\ttry {\r\n\t\thttpRequestParam.startIndex = 0;\r\n\t\tconst response = await fetch(useRequest());\r\n\t\tconst data = await response.json();\r\n\t\tclearBooksSection();\r\n\t\tgetValues(data.items);\r\n\t} catch (error) {\r\n\t\tconsole.log(error.message);\r\n\t}\r\n};\r\n\r\nconst loadMoreBooks = async () => {\r\n\ttry {\r\n\t\thttpRequestParam.startIndex += httpRequestParam.maxResults;\r\n\t\tconst response = await fetch(useRequest());\r\n\t\tconst data = await response.json();\r\n\t\tgetValues(data.items);\r\n\t} catch (error) {\r\n\t\tconsole.log(error.message);\r\n\t}\r\n};\r\n\r\nconst truncateDescription = (description, maxLength) => {\r\n\tif (!description) {\r\n\t\treturn \"Description not available\";\r\n\t}\r\n\tif (description.length > maxLength) {\r\n\t\treturn description.substring(0, maxLength - 3) + \"...\";\r\n\t} else {\r\n\t\treturn description;\r\n\t}\r\n};\r\n\r\nconst truncateName = (title, maxLength) => {\r\n\tif (!title) {\r\n\t\treturn \"Title not available\";\r\n\t}\r\n\tif (title.length > maxLength) {\r\n\t\treturn title.substring(0, maxLength - 3) + \"...\";\r\n\t} else {\r\n\t\treturn title;\r\n\t}\r\n};\r\n\r\nconst getValues = (items) => {\r\n\tconst booksSection = document.querySelector(\".books-section\");\r\n\r\n\titems.forEach((item) => {\r\n\t\tconst bookElement = document.createElement(\"div\");\r\n\t\tbookElement.classList.add(\"book\");\r\n\r\n\t\tconst volumeInfo = item.volumeInfo;\r\n\t\tconst title = truncateName(volumeInfo.title, 40);\r\n\t\tconst authors = volumeInfo.authors ? volumeInfo.authors.join(\", \") : \"Unknown Author\";\r\n\t\tconst description = truncateDescription(volumeInfo.description, 90);\r\n\t\tlet thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : _images_not_found33_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\t\tconst rating = volumeInfo.averageRating || \"No rating\";\r\n\t\tconst ratingsCount = volumeInfo.ratingsCount ? `${volumeInfo.ratingsCount} review` : \"No reviews\";\r\n\t\tconst price = volumeInfo.saleInfo && volumeInfo.saleInfo.retailPrice ? volumeInfo.saleInfo.retailPrice.amount : \"Price not available\";\r\n\r\n\t\tbookElement.innerHTML = `\r\n               <div class=\"book-block__cover\">\r\n                  <img src=\"${thumbnail}\" alt=\"Book cover\">\r\n               </div>\r\n               <div class=\"book-block__info\">\r\n                  <p class=\"book-block__autor\">${authors}</p>\r\n                  <p class=\"book-block__book-name\">${title}</p>\r\n                  <div class=\"book-block__rating-info\">\r\n                        ${(0,_ratingStars__WEBPACK_IMPORTED_MODULE_1__.generateStarRating)(rating)} ${ratingsCount} \r\n                  </div>\r\n                  <p class=\"book-block__book-description\">${description}</p>\r\n                  <p class=\"book-block__price\">${price}</p>\r\n                  <button class=\"book-block__btn\" data-id=\"${item.id}\" type=\"button\">buy now</button>\r\n            </div>\r\n      `;\r\n\r\n\t\tbooksSection.appendChild(bookElement);\r\n\t});\r\n\r\n\tconst buyButtons = document.querySelectorAll(\".book-block__btn\");\r\n\tbuyButtons.forEach(button => {\r\n\t\tbutton.addEventListener(\"click\", () => {\r\n\t\t\tconst bookId = button.getAttribute(\"data-id\");\r\n\t\t\tlocalCart.push(bookId);\r\n\t\t\tlocalStorage.setItem(\"cart\", JSON.stringify(localCart));\r\n\t\t\talert(\"Book added to cart\");\r\n\t\t\t(0,_cart__WEBPACK_IMPORTED_MODULE_2__.countItemsInCart)();\r\n\t\t});\r\n\t});\r\n};\r\n\r\nconst clearBooksSection = () => {\r\n\tconst booksSection = document.querySelector(\".books-section\");\r\n\tbooksSection.innerHTML = \"\";\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n\tconst firstListItem = document.querySelector(\".sidebar__categories-list li\");\r\n\tif (firstListItem) {\r\n\t\tfirstListItem.classList.add(\"active\");\r\n\t\thttpRequestParam.category = firstListItem.textContent;\r\n\t\tfetchData();\r\n\t}\r\n\r\n});\r\n\r\ndocument.querySelector(\".sidebar__categories-list\").addEventListener(\"click\", (event) => {\r\n\tif (event.target.tagName === \"LI\") {\r\n\t\tdocument.querySelectorAll(\".sidebar__categories-list li\").forEach((li) => {\r\n\t\t\tli.classList.remove(\"active\");\r\n\t\t});\r\n\t\tevent.target.classList.add(\"active\");\r\n\t\thttpRequestParam.category = event.target.textContent;\r\n\t\tfetchData();\r\n\t}\r\n});\r\n\r\nconsole.log(\"Извлекаем из localStorage:\", localCart);\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", fetchData);\r\nloadMoreBtn.addEventListener(\"click\", loadMoreBooks);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/main.js?");

/***/ }),

/***/ "./src/js/ratingStars.js":
/*!*******************************!*\
  !*** ./src/js/ratingStars.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateStarRating: () => (/* binding */ generateStarRating)\n/* harmony export */ });\nfunction generateStarRating(rating) {\r\n\tconst maxRating = 5; \r\n\tconst stars = [];\r\n\tfor (let i = 1; i <= maxRating; i++) {\r\n\tconst starClass = i <= rating ? 'star-active' : ''; \r\n\tstars.push(`<svg class=\"star ${starClass}\"><use xlink:href=\"#star\"></use></svg>`); \r\n\t}\r\n\treturn stars.join(''); \r\n}\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/ratingStars.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animationSliderModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationSliderModule */ \"./src/js/animationSliderModule.js\");\n\r\n\r\nconst sliderImg = document.querySelector('.slider-imgs');\r\nconst slides = document.querySelectorAll('.slider-imgs__img');\r\nconst dots = Array.from(document.querySelectorAll('.slider-dots__dot'));\r\n\r\n\r\nlet currentIndex = 0;\r\n\r\nslides.forEach((slide, index) => {\r\n\tif (index === 0) {\r\n\t\tslide.style.display = 'block';\r\n\t\tslide.style.opacity = 0;\r\n\t\t(0,_animationSliderModule__WEBPACK_IMPORTED_MODULE_0__.fadeIn)(slide);\r\n\t} else {\r\n\t\tslide.style.display = 'none';\r\n\t}\r\n});\r\n\r\ndots[0].classList.add('active');\r\n\r\n\r\n\r\nfunction showCurrentSlide() {\r\n\tslides.forEach((slide, index) => {\r\n\t\tif (index === currentIndex) {\r\n\t\t\tslide.style.display = 'block';\r\n\t\t\tslide.style.opacity = 0;\r\n\t\t\t(0,_animationSliderModule__WEBPACK_IMPORTED_MODULE_0__.fadeIn)(slide);\r\n\t\t} else {\r\n\t\t\tslide.style.display = 'none';\r\n\t\t}\r\n\t});\r\n\tshowCurrentDot();\r\n}\r\n\r\nfunction previousSlide() {\r\n\tcurrentIndex = (currentIndex - 1 + slides.length) % slides.length;\r\n\tshowCurrentSlide(currentIndex);\r\n\tshowCurrentDot();\r\n};\r\n\r\nfunction nextSlide() {\r\n\tcurrentIndex = (currentIndex + 1) % slides.length;\r\n\tshowCurrentSlide(currentIndex);\r\n\tshowCurrentDot();\r\n};\r\n\r\nfunction showCurrentDot() {\r\n\tdots.forEach((dot, index) => {\r\n\t\tif (index === currentIndex) {\r\n\t\t\tdot.classList.add('active');\r\n\t\t} else {\r\n\t\t\tdot.classList.remove('active');\r\n\t\t}\r\n\t});\r\n};\r\n\r\ndots.forEach((dot, index) => {\r\n\tdot.addEventListener('click', function () {\r\n\t\tcurrentIndex = index;\r\n\t\tshowCurrentSlide(currentIndex);\r\n\t});\r\n});\r\n\r\nfunction startSliderInterval() {\r\n\treturn setInterval(nextSlide, 3000);\r\n}\r\n\r\nlet sliderInterval = startSliderInterval();\r\n\r\nsliderImg.addEventListener('mouseenter', function () {\r\n\tclearInterval(sliderInterval);\r\n});\r\n\r\nsliderImg.addEventListener('mouseleave', function () {\r\n\tsliderInterval = startSliderInterval();\r\n});\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/slider.js?");

/***/ }),

/***/ "./src/images/not-found33.png":
/*!************************************!*\
  !*** ./src/images/not-found33.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62a9e60bb3e3e84bef5a.png\";\n\n//# sourceURL=webpack://bookshop/./src/images/not-found33.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;