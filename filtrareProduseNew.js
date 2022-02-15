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
	const allProducts = document.querySelectorAll("#store-products");

	for (i = 0; i < allProducts.length; i++) {
		if (allProducts[i].classList.contains(searchValue)) {
			allProducts[i].style.display == "block";
		} else if (searchValue == "") {
			allProducts[i].style.display == "block";
		} else {
			allProducts[i].style.display == "none";
		}
	}
});

/*var allProducts = document.querySelectorAll("#store-products");

[15:42, 15/02/2022] Marius Catalin POPUSOI: pai trebuie luate elementele cu acea clasa
[15:43, 15/02/2022] Marius Catalin POPUSOI: deci trebuie sa folosesti un querySelectorAll
[15:43, 15/02/2022] Marius Catalin POPUSOI: sa stochezi intr-o variabila
[15:43, 15/02/2022] Marius Catalin POPUSOI: si acea variabila sa fie folosita in for */
