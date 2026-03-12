// Pet object
let pet = {};
let totalSpent = 0;

// Create pet
function createPet() {
  const name = document.getElementById("petNameInput").value;
  const type = document.getElementById("petTypeSelect").value;

  // 1️⃣ Set up the pet object
  pet = {
    name: name,
    type: type,
    hunger: 50,
    happiness: 50,
    energy: 50,
    health: 50,
    hygiene: 50,
    money: 0
  };

  // 2️⃣ Set the pet image based on type
  let petImage = document.getElementById("petImage");

  if (pet.type === "Dog") {
    petImage.src = "images/C Dog.png";
  } else if (pet.type === "Cat") {
    petImage.src = "images/C Cat.png";
  } else if (pet.type === "Horse") {
    petImage.src = "images/C Horse.png";
  } else if (pet.type === "Bunny") {
    petImage.src = "images/C Bunny.png";
     } else if (pet.type === "Parrot") {
    petImage.src = "images/C Parrot.png";
  } else if (pet.type === "Lizard") {
    petImage.src = "images/C Lizzard.png";
  }

  // 3️⃣ Hide setup, show pet area
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("petArea").classList.remove("hidden");

  // 4️⃣ Update pet name on screen
  document.getElementById("petName").textContent = pet.name + " The " + pet.type;

  // 5️⃣ Update stats and mood
  updateDisplay();
}

// Update stats on screen
function updateDisplay() {
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("happiness").textContent = pet.happiness;
  document.getElementById("energy").textContent = pet.energy;
  document.getElementById("health").textContent = pet.health;
  document.getElementById("hygiene").textContent = pet.hygiene;
  document.getElementById("money").textContent = pet.money;
  document.getElementById("spent").textContent = totalSpent;

  updateMood();
}

// Pet actions
function feedPet() {
  if (pet.money >= 5) {
    pet.hunger -= 10;
    pet.money -= 5;
    totalSpent += 5;
     } else {
    showPopup("Not enough money! 💸");
  }
  updateDisplay();
}

function playPet() {
  pet.happiness += 10;
  pet.energy -= 10;
  updateDisplay();
}

function restPet() {
  pet.energy += 15;
  pet.hunger -=2;
  updateDisplay();
}

function cleanPet() {
  if (pet.money >= 5) {
    pet.health += 5;
    pet.money -= 5;
    totalSpent += 5;
    pet.hygiene += 5;
      } else {
    showPopup("Not enough money! 💸");
  }
  updateDisplay();
}

function vetVisit() {
  if (pet.money >= 20) {
    pet.health += 20;
    pet.money -= 20;
    totalSpent += 20;
      } else {
    showPopup("Not enough money! 💸");
  }
  updateDisplay();
  document.getElementById("money").textContent = pet.money;
}

function earnMoney() {
  startTrivia();
}


// Mood logic
function updateMood() {
  const mood = document.getElementById("petMood");

  if (pet.health < 30) {
    mood.textContent = "Mood: 🤒 Sick";
  } else if (pet.happiness < 30) {
    mood.textContent = "Mood: 😢 Sad";
  } else if (pet.energy > 70) {
    mood.textContent = "Mood: 😄 Energetic";
    } else if (pet.happiness > 70) {
    mood.textContent = "Mood: 🙂 Happy";
  }
}

let triviaQuestions = [
  {
    question: "Do pets need exercise?",
    answers: ["Yes", "No", "Sometimes"],
    correct: 0
  },
   {
    question: "How can pets get exercise?",
    answers: ["Watch TV ", "Go for a walk", "Sleep All Day"],
    correct: 1
  },
     {
    question: "What can cats eat?",
    answers: ["Raw Potatos", "Onions", "Fish"],
    correct: 2
  },
    {
    question: "Where do you take your pet when it is sick?",
    answers: ["Doctor", "Vet", "Amusement Park"],
    correct: 1
  },
    {
    question: "How long do dogs need to sleep per day?",
    answers: ["12-16 hrs", "10 hrs", "12-14 hrs"],
    correct: 2
  },
   {
    question: "How long do cats need to sleep per day?",
    answers: ["12-16 hrs", "10 hrs", "12-14 hrs"],
    correct: 0
  },
   {
    question: "What is the one place lizards are not found?",
    answers: ["Antarctica", "Alaska", "Australia"],
    correct: 0
  },
   {
    question: "What is a group of lizards called?",
    answers: ["tounge", "lounge", "lodge"],
    correct: 1
  },
  {
    question: "What is a group of dogs called?",
    answers: ["group", "flamboyance", "kennel"],
    correct: 2
  },
  {
    question: "What is a group of cats called?",
    answers: ["pack", "clowder", "lodge"],
    correct: 1
  },
  {
    question: "What is a group of bunny called?",
    answers: ["fluffle", "raft", "leap"],
    correct: 0
  },
  {
    question: "What is a group of horse called?",
    answers: ["shiver", "school", "stud"],
    correct: 2
  },
  {
    question: "What is a group of parrots called?",
    answers: ["lodge", "flock", "speak"],
    correct: 1
  },
  {
    question: "How many species of parrots are there approximately?",
    answers: ["300", "350", "400"],
    correct: 2
  },
  {
    question: "What is a group of lizards called?",
    answers: ["tounge", "lounge", "flamboyance"],
    correct: 1
  },
   {
    question: "How many teeth do female horses have?",
    answers: ["36", "40", "55"],
    correct: 0
  },
   {
    question: "How fast can a rabbit run(Miles Per Hour)?",
    answers: ["55", "40", "35"],
    correct: 0
  },
  {
    question: "What can you not feed your dog?",
    answers: ["Chocolate", "Dog Food", "Meat"],
    correct: 0
  }
];
function startTrivia() {
  let randomIndex = Math.floor(Math.random() * triviaQuestions.length);
  let questionData = triviaQuestions[randomIndex];

  let triviaBox = document.getElementById("triviaBox");

  triviaBox.innerHTML = `
    <p>${questionData.question}</p>
    <button onclick="checkAnswer(${randomIndex}, 0)">
      ${questionData.answers[0]}
    </button>
    <button onclick="checkAnswer(${randomIndex}, 1)">
      ${questionData.answers[1]}
    </button>
    <button onclick="checkAnswer(${randomIndex}, 2)">
      ${questionData.answers[2]}
    </button>
  `;
}
function checkAnswer(questionIndex, answerIndex) {
  let questionData = triviaQuestions[questionIndex];

  if (answerIndex === questionData.correct) {
    pet.money += 10;
    alert("Correct! You earned $10 💰");
  } else {
    pet.health -= 10;
    alert("Wrong answer 😢");
  }

  updateDisplay();

  document.getElementById("triviaBox").innerHTML = "";
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000);
}

