// Get the button elements
var loginButton = document.getElementById('loginButton');
var registerButton = document.getElementById('registerButton');
var submitRegister = document.getElementById('submitRegister');
var submitLogin = document.getElementById('submitLogin');
var searchButton = document.getElementById('searchButton');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitLogin').addEventListener('click', login);
    document.getElementById('submitRegister').addEventListener('click', signup);
});


// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    } else {
        console.error(`Modal with id ${modalId} not found`);
    }
}

// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    } else {
        console.error(`Modal with id ${modalId} not found`);
    }
}

function login() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    fetch("auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( { email, password }),
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(text);
                });
            }
            return response.text();
        })
        .then((data) => {
            data = JSON.parse(data);
            localStorage.setItem("token", data.token);
            if (data.token) {
                window.location.href = `/news?token=${data.token}`;
            } else {
                alert("Failed to log in");
            }
        })
        .catch((error) => {
            console.error(error.message);
            alert(error.message);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitLogin').addEventListener('click', function(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del formulario.
        login();
    });
});

function signup() {
    console.log("signup");
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var name = document.getElementById('registerName').value;

    fetch("auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( { name, email, password }),
    })
        .then((response) => {
            debugger;
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(text);
                });
            }
            document.addEventListener('DOMContentLoaded', function() {
                document.getElementById('registerForm').addEventListener('submit', function(event) {
                    event.preventDefault(); // Previene la recarga de la página
                    signup();
                });
            });
            return response.text();
        })
        .then((data) => {
            debugger;
            alert("User created successfully. You can now log in");
            closeModal('registerModal');
            window.location.href = '/';
        })
        .catch((error) => {
            console.error(error.message);
            alert(error.message);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene la recarga de la página
        signup();
    });
});


// Add event listeners to the buttons
loginButton.addEventListener('click', function() {
    openModal('loginModal');
});

registerButton.addEventListener('click', function() {
    openModal('registerModal');
});

document.getElementById('searchButton').addEventListener('click', function() {
    alert("You need to log in to search news");
});