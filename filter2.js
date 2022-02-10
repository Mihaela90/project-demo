const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

for (i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", (e) => {
		e.preventDefault();

		const filter = e.target.dataset.filter;
		// console.log(filter)
		storeProducts.forEach((product) => {
			if (filter == "all") {
				product.style.display = "block";
			} else {
				if (product.classList.contains(filter)) {
					product.style.display = "block";
				} else {
					product.style.display = "none";
				}
			}
		});
	});
}

/*active class change of color */

// Get the container element
var btnContainer = document.getElementByClassName("filter-box");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

/* Search filter */

const search = document.getElementbyId("search");

search.addEventListener("keyup", (e) => {
	e.preventDefault();
	const searchValue = search.value.toLowerCase().trim();

	for (i = 0; i < storeProducts.length; i++) {
		if (storeProducts[i].classList.contains(searchValue)) {
			storeProducts[i].style.display = "block";
		} else if (searchValue == "") {
			storeProducts[i].style.display = "block";
		} else {
			storeProducts[i].style.display = "none";
		}
	}
});
