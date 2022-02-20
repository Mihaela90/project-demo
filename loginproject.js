

/**
 * suntem pe pagina de sign up
 * 
 * 1) completam informatiile
 * 2) la submit pe formular, se fac validari
 * 3) daca formularul este invalid, afisam erorile
 * 4) altfel
 * 4.1) salvam datele despre utilizator in localstorage
 * ---- o lista de utilizatori (un array de obiecte)
 * ---- push in lista de utilizatori */
 


/*SignUp*/

 class Person {
	constructor(email, username, password) {
	  this.email = email;
	  this.username = username;
	  this.password = password;
	}
  }

  const form = document.querySelector(".signUpForm");
  const signUpBtn = form.querySelector("button");

  signUpBtn.addEventListener("click", function () {
	const email = form.querySelector('input[name="email"]').value;
	const username = form.querySelector('input[name="username"]').value;
	const password = form.querySelector('input[name="password"]').value;

	const person = new Person(email, username, password);
	addNewPersonInList(person);
  });

  function addNewPersonInList(person) {

	const listOfUsers = [

		{
			username: "Mihaela",
			email: "mihaela2022@yahoo.com",
			password: "bluesky"
		},
	
		{
			username: "Daniel",
			email: "daniel2022@yahoo.com",
			password: "matematica"
		},
	
		{
			username: "Mirela",
			email: "mirela2022@yahoo.com",
			password: "iepuras"
		},
	
		{
			username: "Georgel",
			email: "georgel2022@yahoo.com",
			password: "tudorvladimirescu"
		},
		
	];

	listOfUsers.push('person'); /* aici am dubii despre conceptul person, daca este vorba despre variabila person sau nu, si daca am scris corect parametrul de push*/


  }

  



 /* 
 * Suntem pe pagina de login
 * 1) completam informatiile
 * 2) la submit, se fac validari
 * 2.1) parcurgem lista de utilizatori salvata in localstorage
 * 2.2) daca gasim un utilizator corect (email + parola corecte), atunci formularul este valid
 * 3) daca formularul este invalid, afisam erorile
 * 4) altfel redirectionam utilizatorul catre homepage
 * 4.1) salvam in localstorage detaliile despre utlizatorul proaspat logat
 */


/*Signin*/

/* variabila cu lista de utilizatori */
 const listOfUsers = [

	{
		username: "Mihaela",
		email: "mihaela2022@yahoo.com",
		password: "bluesky"
	},

	{
		username: "Daniel",
		email: "daniel2022@yahoo.com",
		password: "matematica"
	},

	{
		username: "Mirela",
		email: "mirela2022@yahoo.com",
		password: "iepuras"
	},

	{
		username: "Georgel",
		email: "georgel2022@yahoo.com",
		password: "tudorvladimirescu"
	},
	
];

/* variabile cu toate elementele de care mai am nevoie*/

const welcomeUser = document.getElementById("welcomeUser").value; /*e un span adaugat la iconul de login, in index.html*/
const suEmail = document.getElementById("uEmail").value;
const suUsername = document.getElementById("suUsername").value;
const suPassword = document.getElementById("suPassword").value;
const submitNewUserInfo = document.getElementById("submitNewUserInfo");
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const loginButton = document.getElementById("loginButton");
const result = document.getElementById("result").value;

/*varianta din tutorial
- aici formularul are atasat onsubmit method cu functia de login: loginFunc() */

var json = JSON.stringify(listOfUsers);
localStorage.setItem(username,json); /*nu inteleg de ce vrem sa salvam numai username-ul*/
console.log("user added");

function loginFunc(e){
	.preventDefault();

	const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result").value;

	var user =localStorage.getItem(username);
	var data = JSON.parse(user);
	console.log(data);

	if(user == null){
		result.innerHTML = "wrong username";
	} else if(username == data.username && password == data.password){
		result.innerHTML = "logged in";
	} else {
		result.innerHTML = "wrong password";
	}
}

/*varianta invatata la curs
- aici butonul de login are un event handler cu functia de login: function onsubmit() */
 
 function onsubmit() {
   const email = form.getElementById("email username").value;
   const password = form.getElementById("password").value;
 
   const foundUser = listOfUsers.find(user => user.email === email && user.password === password);
 
   if (foundUser) {
	 // salvam in localstorage si redirectionam  - cumva cu structura urmatoare- modificata de mine listOfUsers am pus-o in loc de varianta originala usersList? - localStorage.setItem('listOfUsers', JSON.stringify(users));
	 localStorage.setItem('listOfUsers', JSON.stringify(users));
	 location.href = '/index.html';
	 /*aici ar trebui sa redirectionez catre mainpage. E corect facuta redirectionarea? aici trebuie facuta? e necesar aici, sau in alta parte?*/
   } else {
	 // afisam erori   de ex ?: console.log("Incorrect username or password");
	 console.log("Incorrect username or password");
   }
 }


/*Unde folosesc urmatoarele? 

 loggedInUser -> null
 localStorage.setItem('loggedInUser', JSON.stringify(foundUser)); */
	


