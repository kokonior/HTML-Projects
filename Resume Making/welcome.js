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

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("sign_in.html");
  } else {
    var uid = user.uid;
    document.getElementById("hello_user").innerHTML = "Hello " + user.email;
  }
});

document
  .getElementById("portfolio_011")
  .addEventListener("click", function () {
    window.open("index1.html","_self")

  });
