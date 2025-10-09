//Elements
let welcomeEl = document.getElementById("welcome-el")
let name = "User! "
let greeting = "Welcome, "
welcomeEl.innerText = greeting + name + "👋"

let countEl = document.getElementById("count-el")
let count = 0

let previousEntries = document.getElementById("previous-entries")

let profitEntries = document.getElementById("profit-entries")

const saveTab = document.getElementById("save-tab");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

//Buttons
let saveButtonCount = 0;
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", function(){
    saveTab.classList.remove("hidden");
})

yesButton.addEventListener("click", function(){
    saveTab.classList.add("hidden");
})

noButton.addEventListener("click", function(){
    saveTab.classList.add("hidden");
})

//Functions for the buttons
function increment() {
    count += 1
    countEl.textContent = count
}

function saveYes(){
    if (saveButtonCount === 7){
        previousEntries.textContent = "Previous Entries: "
        profitEntries.textContent = "Profit: "
        saveButtonCount = 0;
    }

    let entries = count + " - ";
    previousEntries.textContent += entries

    let profit = "P" + count * 15 + " - ";
    profitEntries.textContent += profit
    count = 0;
    countEl.textContent = count
}
