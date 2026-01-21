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
    money: 100
  };

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("petArea").classList.remove("hidden");

  document.getElementById("petName").textContent = pet.name + " the " + pet.type;

  updateDisplay();
}

// Update stats on screen
function updateDisplay() {
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("happiness").textContent = pet.happiness;
  document.getElementById("energy").textContent = pet.energy;
  document.getElementById("health").textContent = pet.health;
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
}

function earnMoney() {
  pet.money += 10;
  updateDisplay();
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
  } else {
    mood.textContent = "Mood: 🙂 Happy";
  }
}
