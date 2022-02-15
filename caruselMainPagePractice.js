let thumbnails = document.getElementsByClassName("thumbnail");

			let activeImages = document.getElementsByClassName("active");

			for (var i = 0; i < thumbnails.length; i++) {
				thumbnails[i].addEventListener("mouseover", function () {
					console.log(activeImages);

					if (activeImages.length > 0) {
						activeImages[0].classList.remove("active");
					}

					this.classList.add("active");
					document.getElementById("featured").src = this.src;
				});
			}

			let buttonRight = document.getElementById("slideRight");
			let buttonLeft = document.getElementById("slideLeft");

			buttonLeft.addEventListener("click", function () {
				document.getElementById("slider").scrollLeft -= 180;
			});

			buttonRight.addEventListener("click", function () {
				document.getElementById("slider").scrollLeft += 180;
			});



			let buttonRight = document.getElementById("slideRight1");
			let buttonLeft = document.getElementById("slideLeft1");

			buttonLeft.addEventListener("click", function () {
				document.getElementById("slider1").scrollLeft -= 180;
			});

			buttonRight.addEventListener("click", function () {
				document.getElementById("slider1").scrollLeft += 180;
			});


			let buttonRight = document.getElementById("slideRight2");
			let buttonLeft = document.getElementById("slideLeft2");

			buttonLeft.addEventListener("click", function () {
				document.getElementById("slider2").scrollLeft -= 180;
			});

			buttonRight.addEventListener("click", function () {
				document.getElementById("slider2").scrollLeft += 180;
			});


			let buttonRight = document.getElementById("slideRight3");
			let buttonLeft = document.getElementById("slideLeft3");

			buttonLeft.addEventListener("click", function () {
				document.getElementById("slider3").scrollLeft -= 180;
			});

			buttonRight.addEventListener("click", function () {
				document.getElementById("slider3").scrollLeft += 180;
			});

