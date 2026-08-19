/* 1. Tab switching (Bus / Train / Flight / Events) */
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
 
/* 2. Block past dates in the date picker */
const dateInput = document.getElementById("depart");
const today = new Date();
const todayFormatted = today.getFullYear() + "-" +
  String(today.getMonth() + 1).padStart(2, "0") + "-" +
  String(today.getDate()).padStart(2, "0");
dateInput.min = todayFormatted;
dateInput.value = todayFormatted;
 
/* 3. Search form: redirect to the right results page based on the active tab */
const searchForm = document.getElementById("search-form");
const resultPages = { bus: "bus.html", train: "train.html", flight: "flight.html", event: "events.html" };
 
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  const btn = searchForm.querySelector(".search-btn");
  const original = btn.textContent;
  btn.textContent = "Searching...";
 
  const activeTab = document.querySelector(".tab.active").dataset.tab;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("depart").value;
  const page = resultPages[activeTab];
 
  setTimeout(() => {
    btn.textContent = original;
    window.location.href = `${page}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`;
  }, 700);
});
 
/* 4. FAQ accordion */
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  if (item.classList.contains("open")) answer.style.maxHeight = answer.scrollHeight + "px";
 
  question.addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");
    faqItems.forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-answer").style.maxHeight = null;
    });
    if (!wasOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
 
/* 5. Newsletter subscribe with empty/invalid email alert */
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
 
newsletterForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = newsletterEmail.value.trim();
 
  if (email === "") {
    alert("Please enter your email address before subscribing.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
 
  alert("Thanks for subscribing! Check " + email + " for a confirmation email.");
  newsletterForm.reset();
});
 
/* 6. Deals & promotions slider (click an arrow, next slide comes in) */
const dealsTrack = document.getElementById("deals-track");
const dealSlides = document.querySelectorAll(".deal-slide");
const dealDots = document.querySelectorAll(".deal-dot");
let dealIndex = 0;
 
function showDeal(index) {
  dealIndex = (index + dealSlides.length) % dealSlides.length; // wraps around at the ends
  dealsTrack.style.transform = `translateX(-${dealIndex * 100}%)`;
  dealDots.forEach((dot, i) => dot.classList.toggle("active", i === dealIndex));
}
 
document.getElementById("deal-next").addEventListener("click", () => showDeal(dealIndex + 1));
document.getElementById("deal-prev").addEventListener("click", () => showDeal(dealIndex - 1));
 