/*SignUp*/

class Person {
	constructor(email, username, password) {
		this.email = email;
		this.username = username;
		this.password = password;
	}
}

/*Variabilele necesare pt formularul de sign up*/
const suEmail = document.getElementById("suEmail").value;
const suUsername = document.getElementById("suUsername").value;
const suPassword = document.getElementById("suPassword").value;
/*const submitNewUserInfo = document.getElementById("submitNewUserInfo"); - this gets the same element as const signUpButton which is clearer*/
const suForm = document.querySelector(".signUpForm");
const signUpBtn = suForm.querySelector("button");

signUpBtn.addEventListener("click", function () {
	/*const email = suForm.querySelector('input[name="email"]').value;
	const username = suForm.querySelector('input[name="username"]').value;
	const password = suForm.querySelector('input[name="password"]').value; 

	const person = new Person(email, username, password); 
    
    - variabile cu acelasi rol ca cele de mai jos
    - am corectat form.querySelector.. cu suForm.querySelector, fiindca altfel s-ar fi targetat formularul de signin in loc de cel de signup */

	const suEmail = document.getElementById("suEmail").value;
	const suUsername = document.getElementById("suUsername").value;
	const suPassword = document.getElementById("suPassword").value;

	const person = new Person(suEmail, suUsername, suPassword);

	addNewPersonInList(person);
});

function addNewPersonInList(person) {
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
	];

	listOfUsers.push(person);
}

/*Intrebari noi:
1. Cand declar clasa Person, trebuie sa schimb si acolo parametrii si valorile (inclusiv dupa "this.") de "username", "email" si "password" cu "suUsername", "suEmail" si "suPassword"?
2. const listOfUsers trebuie declarata in folderul de javascript de login 
sau in ambele foldere, adica si in cel mentionat dar si in folderul de signUpBtn.js ?

3. const listOfUsers trebuie stocata in local storage in folderul de js de login sau in cel de signup?

4. Avand in vedere HTML-ul loginproject.html urmatoarele constante, desi scrise diferit, obtin aceleasi elemente nu?

const email = suForm.querySelector('input[name="email"]').value;
	const username = suForm.querySelector('input[name="username"]').value;
	const password = suForm.querySelector('input[name="password"]').value; 

	const person = new Person(email, username, password);   

si corespondentele (unde am dat alt  nume constantelor pt a nu se confunda cu constantele din login form 
    si unde am targetat elementele dupa id si nu dupa nume): 

	const suEmail = document.getElementById("suEmail").value;
	const suUsername = document.getElementById("suUsername").value;
	const suPassword = document.getElementById("suPassword").value;

	const person = new Person(suEmail, suUsername, suPassword); */
