// Import Firebase libraries
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

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

// Wait for the document to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Handle form submission
  document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Create a new user using Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful signup
        const user = userCredential.user;
        console.log('User created:', user);

        // Optionally, you can store additional information like first name and last name in Firestore
        // You can use Firestore to store this data (e.g., firstName, lastName)

        // Redirect to the login page or dashboard
        alert('Signup successful! You can now login.');
        window.location.href = 'index.html'; // Redirect to the login page
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error during signup:', errorMessage);
        alert('Error during signup: ' + errorMessage);
      });
  });

  // Function to navigate to login page
  function navigateToLogin() {
    window.location.href = 'index.html'; // Redirect to login page
  }

});
