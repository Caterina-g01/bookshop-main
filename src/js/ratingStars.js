function generateStarRating(rating) {
	const maxRating = 5; 
	const stars = [];
	for (let i = 1; i <= maxRating; i++) {
	const starClass = i <= rating ? 'star-active' : ''; 
	stars.push(`<svg class="star ${starClass}"><use xlink:href="#star"></use></svg>`); 
	}
	return stars.join(''); 
}

export {generateStarRating}