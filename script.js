const flippedCard = document.querySelectorAll(".flip-card-inner");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;

  const card = this;
  card.classList.add("flipped");

  if (card === firstCard) return;

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = card;
    return;
  }

  secondCard = card;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(function () {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  flippedCard.forEach((card) => {
    const randomPos = Math.floor(Math.random() * flippedCard.length);
    card.style.order = randomPos;
  });
}

shuffle();

flippedCard.forEach((card) => card.addEventListener("click", flipCard));
