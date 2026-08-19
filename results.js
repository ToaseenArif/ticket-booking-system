/* Reads ?from=&to=&date= from the URL and shows it on the results page */
const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "Lahore";
const to = params.get("to") || "Islamabad";
const date = params.get("date") || "";
 
const summary = document.getElementById("results-summary");
summary.textContent = from + " → " + to + (date ? " · " + date : "");
