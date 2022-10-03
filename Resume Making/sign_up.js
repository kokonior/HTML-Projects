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


// Refernece contactInfo collections

const auth = firebase.auth();

// Sign In Automatically
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // var uid = user.uid;
    location.replace("sign_in.html");
  }
});

document
  .getElementById("sign_up_user_button")
  .addEventListener("click", function () {
    var input_name = document.getElementById("input_name").value;
    var input_password = document.getElementById("input_password").value;
    var input_email = document.getElementById("input_email").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(input_email, input_password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;

        location.replace("sign_in.html");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  });

// document
//   .getElementById("delete_all_data_button")
//   .addEventListener("click", function () {
//     var ref = firebase.database().ref("Data");
//     alert(ref);

//     ref.on("value", function (snapshot) {
//       var hj = snapshot.val();
//       alert(hj.Hello);
//     });
//   });
