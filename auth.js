// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
};
firebase.initializeApp(firebaseConfig);

// LOGIN
function loginUser() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => window.location.href = "index.html")
    .catch(err => alert(err.message));
}

// LOGOUT
function logoutUser() {
  firebase.auth().signOut()
  .then(() => window.location.href = "login.html");
}

// CEK USER LOGIN
firebase.auth().onAuthStateChanged(user => {
  const protectedPages = ["index.html"];

  const currentPage = window.location.pathname.split("/").pop();
  if (!user && protectedPages.includes(currentPage)) {
    window.location.href = "login.html";
  }
});
