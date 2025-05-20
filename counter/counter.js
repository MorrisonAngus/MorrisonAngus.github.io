// counter program

const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increment");
const countLabel = document.getElementById("countLabel");

let count = 0;

incrementBtn.onclick = function(){
    count++;
    update_count;
}

decrementBtn.onclick = function(){
    count--;
    update_count;
}

resetBtn.onclick = function(){
    count = 0;
    update_count;
}

let update_count = function(){
    countLabel.textContent = count;
}