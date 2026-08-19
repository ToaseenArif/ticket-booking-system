const partnerForm = document.getElementById("partner-form");
 
partnerForm.addEventListener("submit", e => {
  e.preventDefault();
 
  const business = document.getElementById("p-business").value.trim();
  const contact = document.getElementById("p-contact").value.trim();
  const email = document.getElementById("p-email").value.trim();
  const message = document.getElementById("p-message").value.trim();
 
  if (business === "" || contact === "" || email === "" || message === "") {
    alert("Please fill in every field before submitting.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
 
  alert("Thanks, " + contact + "! Your application for " + business + " has been received.");
  partnerForm.reset();
});
 
