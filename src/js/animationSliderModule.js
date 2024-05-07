function fadeIn(element) {
	let opacity = 0;
	const interval = setInterval(() => {
		opacity += 0.05;
		element.style.opacity = opacity;
		if (opacity >= 1) {
			clearInterval(interval);
		}
	}, 30);
}

export {fadeIn};



