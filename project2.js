const quoteContain = document.querySelector(".quote");
const newquote = document.getElementById("new-quote-btn");
async function getRanQuo() {
  try {
    const resp = await fetch("https://type.fit/api/quotes");
    const data = await resp.json();
    const ranindex = Math.floor(Math.random() * data.length);
    const ranQuote = data[ranindex];
    quoteContain.innerHTML = `<p>${ranQuote.text}</p><p class="author">- ${ranQuote.author || "Unknown"}</p>`;
  } catch (error) {
    console.error("Error fetching and displaying the quote:", error);
    quoteContain.innerHTML = "<p>Failed to fetch a quote. Please try again later.</p>";
  }
}
newquote.addEventListener("click", getRanQuo);
getRanQuo();
