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

/* Search filter dupa titlul produsului */

const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
	e.preventDefault();

	const searchTerm = e.target.value.trim();
	/*const searchValue = search.value.toLowerCase().trim(); */
	storeProducts.forEach((product) => {
		const productTitle = product.getAttribute("title").toLowerCase();
		if (searchTerm.length === 0) product.style.display = "block";
		if (productTitle.startsWith(searchTerm)) {
			product.style.display = "block";
		} else {
			product.style.display = "none";
		}
	});


});


	
/*Alte notite pt construirea filtrului dupa titlu

const productTitle = document.querySelector('[title="Ira Brossbody"]');



for (i = 0; i < storeProducts.length; i++) {
	if (storeProducts[i].textContent.startsWith(searchValue)) {
		storeProducts[i].style.display = "block";
	} else if (searchValue == "") {
		storeProducts[i].style.display = "block";
	} else {
		storeProducts[i].style.display = "none";
	}
}
});*/