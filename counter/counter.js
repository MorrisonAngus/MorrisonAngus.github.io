// counter program

const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increment");
const countLabel = document.getElementById("countLabel");

let count = 0;

incrementBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decrementBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
