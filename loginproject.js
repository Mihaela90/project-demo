/*Signin*/

/* variabila cu lista de utilizatori 
const listOfUsers = [
	{
		username: "Mihaela",
		email: "mihaela2022@yahoo.com",
		password: "bluesky",
	},

	{
		username: "Daniel",
		email: "daniel2022@yahoo.com",
		password: "matematica",
	},

	{
		username: "Mirela",
		email: "mirela2022@yahoo.com",
		password: "iepuras",
	},

	{
		username: "Georgel",
		email: "georgel2022@yahoo.com",
		password: "tudorvladimirescu",
	},
];  */


const welcomeUser = document.getElementById("welcomeUser"); 
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const loginButton = document.getElementById("loginButton");
const result = document.getElementById("result").value;

/*varianta invatata la curs
- aici butonul de login are un event handler cu functia de login: function onsubmit() */

function onsubmit() {
	const email = form.getElementById("email username").value;
	const password = form.getElementById("password").value;

	const foundUser = listOfUsers.find(
		(user) => user.email === email && user.password === password
	);

	if (foundUser) {
		localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); 
		location.href = "/index.html";

	} else {
		console.log("Incorrect username or password");
	}
}

