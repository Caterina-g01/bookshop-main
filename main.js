/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/sass/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconsole.log(\"hello\");\n\n//# sourceURL=webpack://bookshop/./src/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("const sliderImg = document.querySelector('.slider-imgs');\r\nconst slides = document.querySelectorAll('.slider-imgs__img');\r\nconst dots = Array.from(document.querySelectorAll('.slider-dots__dot'));\r\n\r\nconst slideCount = slides.length;\r\nlet currentIndex = 0;\r\n\r\nslides.forEach((slide, index) => {\r\n\tif (index === 0) {\r\n\t\tslide.style.display = 'block';\r\n\t\tslide.style.opacity = 0;\r\n\t\tfadeIn(slide);\r\n\t} else {\r\n\t\tslide.style.display = 'none';\r\n\t}\r\n});\r\n\r\ndots[0].classList.add('active');\r\n\r\nfunction fadeIn(element) {\r\n\tlet opacity = 0;\r\n\tconst interval = setInterval(() => {\r\n\t\topacity += 0.05;\r\n\t\telement.style.opacity = opacity;\r\n\t\tif (opacity >= 1) {\r\n\t\t\tclearInterval(interval);\r\n\t\t}\r\n\t}, 40);\r\n}\r\n\r\nfunction showCurrentSlide() {\r\n\tslides.forEach((slide, index) => {\r\n\t\tif (index === currentIndex) {\r\n\t\t\tslide.style.display = 'block';\r\n\t\t\tslide.style.opacity = 0;\r\n\t\t\tfadeIn(slide);\r\n\t\t} else {\r\n\t\t\tslide.style.display = 'none';\r\n\t\t}\r\n\t});\r\n\tshowCurrentDot();\r\n}\r\n\r\nfunction previousSlide() {\r\n\tcurrentIndex = (currentIndex - 1 + slides.length) % slides.length;\r\n\tshowCurrentSlide(currentIndex);\r\n\tshowCurrentDot();\r\n};\r\n\r\nfunction nextSlide() {\r\n\tcurrentIndex = (currentIndex + 1) % slides.length;\r\n\tshowCurrentSlide(currentIndex);\r\n\tshowCurrentDot();\r\n};\r\n\r\nfunction showCurrentDot() {\r\n\tdots.forEach((dot, index) => {\r\n\t\tif (index === currentIndex) {\r\n\t\t\tdot.classList.add('active');\r\n\t\t} else {\r\n\t\t\tdot.classList.remove('active');\r\n\t\t}\r\n\t});\r\n};\r\n\r\ndots.forEach((dot, index) => {\r\n\tdot.addEventListener('click', function () {\r\n\t\tcurrentIndex = index;\r\n\t\tshowCurrentSlide(currentIndex);\r\n\t});\r\n});\r\n\r\nfunction startSliderInterval() {\r\n\treturn setInterval(nextSlide, 4000);\r\n}\r\n\r\nlet sliderInterval = startSliderInterval();\r\n\r\nsliderImg.addEventListener('mouseenter', function () {\r\n\tclearInterval(sliderInterval);\r\n});\r\n\r\nsliderImg.addEventListener('mouseleave', function () {\r\n\tsliderInterval = startSliderInterval();\r\n});\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/slider.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;