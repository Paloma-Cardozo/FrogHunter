const availableCards = [
  {
    name: "frog1",
    image: "Images/frog1.png",
    color: "#ee76f8",
    flipped: false,
    matched: false,
  },
  {
    name: "frog2",
    image: "Images/frog2.png",
    color: "#3a93f9",
    flipped: false,
    matched: false,
  },
  {
    name: "frog3",
    image: "Images/frog3.png",
    color: "#f2ba49",
    flipped: false,
    matched: false,
  },
  {
    name: "frog4",
    image: "Images/frog4.png",
    color: "#5dcd5d",
    flipped: false,
    matched: false,
  },
  {
    name: "frog5",
    image: "Images/frog5.png",
    color: "#db7866",
    flipped: false,
    matched: false,
  },
  {
    name: "frog6",
    image: "Images/frog6.png",
    color: "#9566db",
    flipped: false,
    matched: false,
  },
  {
    name: "frog7",
    image: "Images/frog7.png",
    color: "#76f887",
    flipped: false,
    matched: false,
  },

  {
    name: "frog8",
    image: "Images/frog8.png",
    color: "#a476f8",
    flipped: false,
    matched: false,
  },
  {
    name: "frog9",
    image: "Images/frog9.png",
    color: "#fc6c56",
    flipped: false,
    matched: false,
  },
  {
    name: "frog10",
    image: "Images/frog10.png",
    color: "#3d5fe3",
    flipped: false,
    matched: false,
  },
  {
    name: "frog11",
    image: "Images/frog11.png",
    color: "#f876a6",
    flipped: false,
    matched: false,
  },
  {
    name: "frog12",
    image: "Images/frog12.png",
    color: "#f2f876",
    flipped: false,
    matched: false,
  },
  {
    name: "frog13",
    image: "Images/frog13.png",
    color: "#768cf8",
    flipped: false,
    matched: false,
  },
  {
    name: "frog14",
    image: "Images/frog14.png",
    color: "#942e9e",
    flipped: false,
    matched: false,
  },
  {
    name: "frog15",
    image: "Images/frog15.png",
    color: "#3fe1f3",
    flipped: false,
    matched: false,
  },
  {
    name: "frog16",
    image: "Images/frog16.png",
    color: "#f87676",
    flipped: false,
    matched: false,
  },
  {
    name: "frog17",
    image: "Images/frog17.png",
    color: "#f8e276",
    flipped: false,
    matched: false,
  },
  {
    name: "frog18",
    image: "Images/frog18.png",
    color: "#8afd7b",
    flipped: false,
    matched: false,
  },
  {
    name: "frog19",
    image: "Images/frog19.png",
    color: "#43bef7",
    flipped: false,
    matched: false,
  },
  {
    name: "frog20",
    image: "Images/frog20.png",
    color: "#fe67ae",
    flipped: false,
    matched: false,
  },
];

let selectedCards = [];

let gameCards = [];

function startGame(numberOfPairs) {
  selectedCards = availableCards.slice(0, numberOfPairs);
  gameCards = [...selectedCards, ...selectedCards];
  gameCards = shuffleArray(gameCards);
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderGameBoard() {
  const gameBoard = document.createElement("div");
  gameBoard.className = "container";

  gameCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "flip-card";

    const cardInner = document.createElement("div");
    cardInner.className = "flip-card-inner";
    cardElement.dataset.name = card.name;
    cardElement.dataset.matched = card.matched;

    const cardFront = document.createElement("div");
    cardFront.className = "flip-card-front";

    const cardBack = document.createElement("div");
    cardBack.className = "flip-card-back";
    cardBack.style.backgroundColor = card.color;

    const cardImage = document.createElement("img");
    cardImage.src = card.image;

    cardBack.appendChild(cardImage);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardElement.appendChild(cardInner);
    gameBoard.appendChild(cardElement);
  });

  document.body.appendChild(gameBoard);
}

startGame(6);
renderGameBoard();

/*
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


shuffle();

flippedCard.forEach((card) => card.addEventListener("click", flipCard));
*/
