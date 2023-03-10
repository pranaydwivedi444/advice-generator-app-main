const quoteButton = document.querySelector(".dice-btn");
const adviceNumber = document.querySelector(".advice-num");
const quoteText = document.querySelector(".quotes");
const API_URL = "https://api.adviceslip.com/advice";

function updateQuote(advice, id) {
  //   console.log(quoteText, adviceNumber);
  if (advice.length > 150) {
    quoteText.style.fontSize = "2rem";
  }
  quoteText.textContent = `" ${advice}"`;
  adviceNumber.textContent = `ADVICE ${id}`;
}

const receiveQuote = async () => {
  try {
    const res = await fetch(API_URL);
    const quote = await res.json();
    const {
      slip: { advice, id },
    } = quote;
    console.log(advice, id);
    updateQuote(advice, id);
  } catch (err) {
    console.log(err);
  }
};
quoteButton.addEventListener("click", receiveQuote);
receiveQuote();
