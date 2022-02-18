const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

for (i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", (e) => {
		e.preventDefault();

		/* with this, we target the data-filter from div class: filter-box*/
		const filter = e.target.dataset.filter; 
		/*console.log(filter); */
		storeProducts.forEach((product) => {
			if (filter == "all") {
				/* if we click on the all filter, then.. */
				product.style.display ="block"; 
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

/* Search filter */

const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
	e.preventDefault();
	const searchValue = search.value.toLowerCase().trim();
	/*const allProducts = document.querySelectorAll("#store-products"); */

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


