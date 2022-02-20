document.addEventListener("DOMContentLoaded", () => {
    const logInForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
});


https://github.com/dcode-youtube/login-signup-form/commit/909295a30b691449f9a88a71612c0e703a559430
https://www.youtube.com/watch?v=3GsKEtBcGTk