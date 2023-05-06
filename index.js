let countEl = document.getElementById("count-el")
let count = 0
let savebt=document.getElementById("store")
function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let contStr=count+"-"
    savebt.textContent+=contStr
    countEl.textContent=0
    count=0
}


