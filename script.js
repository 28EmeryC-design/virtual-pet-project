let pet = {};

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
    money: 50, // Starting money
    spentFood: 0,
    spentVet: 0,
    spentToys: 0,
    spentSupplies: 0
  };

  document.getElementById("petImage").src = `images/C ${pet.type}.png`;
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("petArea").classList.remove("hidden");
  document.getElementById("petName").textContent = pet.name + " The " + pet.type;

  updateDisplay();
}

function updateDisplay() {
  // 1. Math
  const total = pet.spentFood + pet.spentVet + pet.spentToys + pet.spentSupplies;

  // 2. Update Stats Area
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("happiness").textContent = pet.happiness;
  document.getElementById("energy").textContent = pet.energy;
  document.getElementById("health").textContent = pet.health;
  document.getElementById("hygiene").textContent = pet.hygiene;
  
  // Update the first set of Money/Spent
  document.getElementById("money").textContent = pet.money;
  document.getElementById("spent").textContent = total;

  // 3. Update Expense Box (using the NEW unique IDs)
  document.getElementById("foodCost").textContent = pet.spentFood + pet.spentSupplies;
  document.getElementById("vetCost").textContent = pet.spentVet;
  document.getElementById("toyCost").textContent = pet.spentToys;
  document.getElementById("totalSpentDisplay").textContent = total;
  document.getElementById("budgetDisplay").textContent = pet.money;

  updateMood();
}

// Action with Money Protection
function feedPet() {
  // Check if they have at least $5
  if (pet.money >= 5) {
    pet.hunger = Math.max(0, pet.hunger - 10);
    pet.money -= 5;
    pet.spentFood += 5;
    updateDisplay();
  } else {
    // This runs ONLY if they have less than $5
    showPopup("Not enough money! 💸");
  }
}

function playPet() {
  if (pet.money >= 3) {
    pet.happiness = Math.min(100, pet.happiness + 10);
    pet.energy = Math.max(0, pet.energy - 10);
    pet.money -= 3;
    pet.spentToys += 3;
    updateDisplay();
  } else {
    showPopup("Not enough money! 💸");
  }
}

function cleanPet() {
  if (pet.money >= 2) {
    pet.hygiene = Math.min(100, pet.hygiene + 15);
    pet.money -= 2;
    pet.spentSupplies += 2;
    updateDisplay();
  } else {
    showPopup("Not enough money! 💸");
  }
}

function vetVisit() {
  if (pet.money >= 20) {
    pet.health = Math.min(100, pet.health + 20);
    pet.money -= 20;
    pet.spentVet += 20;
    updateDisplay();
  } else {
    showPopup("Not enough money! 💸");
  }
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.classList.remove("hidden");
  setTimeout(() => { popup.classList.add("hidden"); }, 2000);
}

// 5. Mood & Trivia Logic
function updateMood() {
  const mood = document.getElementById("petMood");
  if (pet.health < 30) mood.textContent = "Mood: 🤒 Sick";
  else if (pet.happiness < 30) mood.textContent = "Mood: 😢 Sad";
  else if (pet.energy > 70) mood.textContent = "Mood: 😄 Energetic";
  else mood.textContent = "Mood: 🙂 Happy";
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

