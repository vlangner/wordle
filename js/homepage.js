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

// signing out
$("#signoutButton").click(function(){
    firebase.auth().signOut().then(() => {
        window.location.href = 'signin.html';
        console.log("Successfully signed out!");
    }).catch((error) => {
        console.log(error.message)
    });
});