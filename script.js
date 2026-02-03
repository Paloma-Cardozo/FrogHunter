const flippedCard = document.querySelectorAll(".flip-card-inner");

function flipCard() {
  flippedCard.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");

      setTimeout(function () {
        card.classList.remove("flipped");
      }, 5000);
    });
  });
}

flipCard();
