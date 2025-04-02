import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCASQRvxe3G7upsJqD-0Ru-ljVNB_REbFw",
  authDomain: "projects-d1088.firebaseapp.com",
  projectId: "projects-d1088",
  storageBucket: "projects-d1088.appspot.com",
  messagingSenderId: "857391932558",
  appId: "1:857391932558:web:c94f83de9a1c1d2e2355df",
  measurementId: "G-C0CH1N1NF2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.onload = function () {
  const button = document.getElementById("btn");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation (ensuring it's not empty)
    if (password.length === 0) {
      alert("Password cannot be empty.");
      return;
    }

    // Ensure fields are not empty
    if (!email || !password) {
      alert("Both fields are required.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successful");
        window.location.href = "home.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
};
