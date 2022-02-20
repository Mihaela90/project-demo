let thumbnails = document.getElementsByClassName("thumbnail");

let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener("mouseover", function () {
		console.log(activeImages);

		if (activeImages.length > 0) {
			activeImages[0].classList.remove("active");
		}

		this.classList.add("active");
		document.getElementsByClassName("active").src =
			this.src; /*aici in codul sursa de la carusel.js, foloseam document.getElementById("featured") insa in acest cod nu avem imaginea featured. Ceea ce vrem sa schimbam aici este clasa active, de la un thumbnail la altul, si nu clasa active de la featured la celelalte thumbnailuri.*/
	});
}

let buttonRight = document.getElementById("slideRight");
let buttonLeft = document.getElementById("slideLeft");

buttonLeft.addEventListener("click", function () {
	document.getElementById("slider").scrollLeft -= 280;
});

buttonRight.addEventListener("click", function () {
	document.getElementById("slider").scrollLeft += 280;
});

let buttonRight1 = document.getElementById("slideRight1");
let buttonLeft1 = document.getElementById("slideLeft1");

buttonLeft1.addEventListener("click", function () {
	document.getElementById("slider1").scrollLeft -= 280;
});

buttonRight1.addEventListener("click", function () {
	document.getElementById("slider1").scrollLeft += 280;
});

let buttonRight2 = document.getElementById("slideRight2");
let buttonLeft2 = document.getElementById("slideLeft2");

buttonLeft2.addEventListener("click", function () {
	document.getElementById("slider2").scrollLeft -= 280;
});

buttonRight2.addEventListener("click", function () {
	document.getElementById("slider2").scrollLeft += 280;
});

let buttonRight3 = document.getElementById("slideRight3");
let buttonLeft3 = document.getElementById("slideLeft3");

buttonLeft3.addEventListener("click", function () {
	document.getElementById("slider3").scrollLeft -= 280;
});

buttonRight3.addEventListener("click", function () {
	document.getElementById("slider3").scrollLeft += 280;
});
