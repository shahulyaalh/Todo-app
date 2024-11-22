window.onload = function () {
  document.body.classList.add("fade-in");
};

function navigateToLogin() {
  document.body.classList.remove("fade-in");
  document.body.classList.add("fade-out");

  setTimeout(function () {
    window.location.href = "./index.html";
  }, 500);
}


// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHEFb7hM7mhXRTET67HLqZKxDsa87GlQ",
  authDomain: "to-do-application-ea301.firebaseapp.com",
  projectId: "to-do-application-ea301",
  storageBucket: "to-do-application-ea301.firebasestorage.app",
  messagingSenderId: "932991554958",
  appId: "1:932991554958:web:f9c6ecd213a6c32bff00df",
  measurementId: "G-YMWTZYYKC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form submission logic
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login successful:", userCredential.user);
      alert("Login successful!");
      window.location.href = "stickywall.html";
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    });
});
