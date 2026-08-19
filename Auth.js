/* 1. Switch between the Sign in and Sign up forms */
const authTabs = document.querySelectorAll("#auth-tabs .tab");
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");
 
authTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    authTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
 
    // Show the form that matches this tab, hide the other one
    const formToShow = tab.getAttribute("data-form");
    signinForm.classList.toggle("hidden", formToShow !== "signin-form");
    signupForm.classList.toggle("hidden", formToShow !== "signup-form");
  });
});
 
/* 2. Sign in form validation */
signinForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value.trim();
 
  if (email === "" || password === "") {
    alert("Please fill in both your email and password.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
 
  alert("Signed in successfully!");
  signinForm.reset();
});
 
/* 3. Sign up form validation */
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const confirm = document.getElementById("signup-confirm").value.trim();
 
  if (name === "" || email === "" || password === "" || confirm === "") {
    alert("Please fill in every field to create your account.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
  if (password !== confirm) {
    alert("Passwords do not match. Please try again.");
    return;
  }
 
  alert("Account created successfully! You can now sign in.");
  signupForm.reset();
});
 