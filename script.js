// Pet object
let pet = {};
let totalSpent = 0;

// Create pet
function createPet() {
  const name = document.getElementById("petNameInput").value;
  const type = document.getElementById("petTypeSelect").value;

  pet = {
    name: name,
    type: type,
    hunger: 50,
    happiness: 50,
    energy: 50,
    health: 50,
    hygiene: 50,
    money: 0   //
  };

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("petArea").classList.remove("hidden");
  document.getElementById("petName").textContent = pet.name + " The " + pet.type;

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
  updateDisplay();
}

function cleanPet() {
  if (pet.money >= 3) {
    pet.health += 5;
    pet.money -= 3;
    totalSpent += 3;
    pet.hygiene += 5;
  }
  updateDisplay();
}

function vetVisit() {
  if (pet.money >= 20) {
    pet.health += 20;
    pet.money -= 20;
    totalSpent += 20;
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
    answers: ["Yes", "No", "somtimes"],
    correct: 0
  },
   {
    question: "How can pets get exercise?",
    answers: ["Watch TV ", "Go for a walk", "Sleep All Day"],
    correct: 1
  },
     {
    question: "what can cats eat?",
    answers: ["Raw Potatos", "Onions", "Fish"],
    correct: 2
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
    alert("Wrong answer 😢");
  }

  updateDisplay();

  document.getElementById("triviaBox").innerHTML = "";
}