let welcomeEl = document.getElementById("welcome-el")
let name = "User! "
let greeting = "Welcome, "
welcomeEl.innerText = greeting + name + "👋"

let countEl = document.getElementById("count-el")
let count = 0

let previousEntries = document.getElementById("previous-entries")

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let entries = count + " - ";
    previousEntries.textContent += entries
    count = 0;
    countEl.textContent = count
}
