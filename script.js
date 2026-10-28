const card =  document.querySelector(".card");
const signup = document.querySelector(".show-signup");
const login = document.querySelector(".show-login");
signup.onclick = event => {
    event.preventDefault();
    card.classList.add("signup-mode");
};
login.onclick = event => {
    event.preventDefault();
    card.classList.remove("signup-mode");
};
