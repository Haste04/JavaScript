let countEl = document.getElementById("count-el")
let count = -1

function increment() {
    count +=1
    countEl.innerText = count + 1
    console.log(count)
}
