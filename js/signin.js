const firebaseConfig = {
    apiKey: "AIzaSyDRp5vSHRwd70JFP7XBZFj9oxrR0IkgR4Y",
    authDomain: "finalproject-de8ef.firebaseapp.com",
    projectId: "finalproject-de8ef",
    storageBucket: "finalproject-de8ef.appspot.com",
    messagingSenderId: "733526193590",
    appId: "1:733526193590:web:b4659c1d10342cbdac7d17",
    measurementId: "G-DP4C3ERET1"
};

firebase.initializeApp(firebaseConfig);

// signing up
$("#newUser").submit(function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        console.log("Signed up!");
        window.location.href = "homepage.html";
    });
});

// logging in
$('#login').submit(function (e) {
    e.preventDefault();

    var usernameLogin = document.getElementById('username2').value;
    var passwordLogin = document.getElementById('password2').value;

    console.log("email: " + usernameLogin + " password: " + passwordLogin);

    firebase.auth().signInWithEmailAndPassword(usernameLogin, passwordLogin).then((success) => {
        console.log("Log in");
        let user = firebase.auth().currentUser;
        window.location.href = "homepage.html";

    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
});

$('#google').click(function () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        console.log("Google user: " + user.email);
        window.location.href = "homepage.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error message: " + errorMessage);
    });
});