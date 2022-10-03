const firebaseConfig = {
  apiKey: "AIzaSyDQbRzIOs8widnxJYAz_1WPvNytQrYrveI",
  authDomain: "i-neuron.firebaseapp.com",
  databaseURL: "https://i-neuron-default-rtdb.firebaseio.com",
  projectId: "i-neuron",
  storageBucket: "i-neuron.appspot.com",
  messagingSenderId: "950218196671",
  appId: "1:950218196671:web:6586590c08407f98f7a80a",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign In Automatically
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // var uid = user.uid;
    location.replace("index1.html");
  }
});


document
  .getElementById("sign_in_user_button")
  .addEventListener("click", function () {
    var input_password = document.getElementById("input_email_password").value;
    var input_email = document.getElementById("input_email_login").value;


    firebase
      .auth()
      .signInWithEmailAndPassword(input_email, input_password)
      .then(function (firebaseUser) {
        // Success
        location.replace("index1.html");
      })
      .catch(function (error) {
        // Error Handling
      });
  });
