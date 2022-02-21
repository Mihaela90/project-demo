const suEmail = document.getElementById("suEmail").value;
const suUsername = document.getElementById("suUsername").value;
const suPassword = document.getElementById("suPassword").value;
/*const submitNewUserInfo = document.getElementById("submitNewUserInfo"); - this gets the same element as const signUpButton which is clearer*/
const suForm = document.querySelector(".signUpForm");
const signUpBtn = suForm.querySelector("button");
const result = document.getElementById("result").value;

if (suEmail.length === 0) {
	/*console.log("Incorrect Email");*/
	result.textContent = "Incorrect email";
	return;
}

if (suUsername.length === 0) {
	/*console.log("Incorrect Username");*/
	result.textContent = "Incorrect username";
	return;
}

if (suPassword.length === 0) {
	/*console.log("Incorrect Password");*/
	result.textContent = "Incorrect password";
	return;
}

const person = new Person(suEmail, suUsername, suPassword);
const existingUsers = JSON.parse(localStorage.getItem("listOfUsers")) ?? [];
existingUsers.push(person);
localStorage.setItem("listOfUsers", JSON.stringify(existingUsers));
location.href = "/loginproject.html";

/*Intrebari
1. lista de utilizatori deja existenta (listOfUsers) contine cheile username, email si password, 
in schimb, in formularul meu de signUp am dat la email, username si password id-uri diferite de cele din login form. 
Astfel, id'urile si variabilele referitoare la aceste elemente din formularul de sign up sunt: suEmail, suUsername, si suPassword. 
Am folosit aceste nume si cand am creat noua persoana, aici in formularul de signup. 
daca in schimb vreau sa adaug noua persoana in persoana deja existenta, nu vor mai corespunde key-urile. 
Asadar, trebuie sa schimb aici, in formularul de signup parametrii atunci cand creez o persoana noua, si sa folosesc tot email, password si username in loc de suEmail, suPassword, suUsername?
daca fac asta, trebuie sa schimb si id-urile ca sa corespunda cu aceste keyuri sau pot sa las id-urile asa, cu nume diferentiat fata de id-urile din login form?

Daca te uiti in html la formularul de sign up o sa vezi ca am dat inputurilor de email and co. si un nume. Acel nume corespunde cu key-urile din lista de useri existenta, si deci as putea sa ma folosesc de acele nume.


2. cand fac redirectionarea catre formularul de login, ar trebui sa fac aceasta redirectionare catre fisierul de javascript(ca sa se intregeasca codul, ma gandesc) sau cel de html?

3. parametrul folosit la liniile 25 si 27 este listOfUsers adica lista de utilizatori pe care am facut-o in loginproject.js (codul pt login).
3.1. este bine asa?
3.2. este necesar sa declar aceasta constanta si in codul de pe folderul de signUp de javascript (signupBetter.js)? */
