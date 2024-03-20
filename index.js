let box = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset");
let turn0 = true;
let winner = document.querySelector(".message");
let annoce = document.querySelector("#show-winner");
let newgame = document.querySelector("#newgame");
let resetgame = document.querySelector("#reset");
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
let noWinner = () => {
    annoce.innerHTML = "DRAW";
    winner.classList.remove("hide");

}
let enableboxes = () => {
    for (boxes of box) {
        boxes.disabled = false;
        winner.classList.add("hide");
        boxes.innerHTML = "";
        turn0 = true;
        count = 0;

    }
}
// start new game button
newgame.addEventListener("click", enableboxes)
// reset game button
resetgame.addEventListener("click", enableboxes
)

let disableboxes = () => {
    for (boxes of box) {
        boxes.disabled = true;
    }
}

// showing winner at the end 
let showWinner = (showWinner) => {
    annoce.innerHTML = `winner is ${showWinner}`;
    winner.classList.remove("hide");
    disableboxes();
}

// clicking of the boxess to add text
box.forEach((tic) => {
    tic.addEventListener("click", () => {
        count += 1;
        if (turn0 === true) {
            tic.innerHTML = "O";
            turn0 = false;
        }
        else {
            tic.innerHTML = "X";
            turn0 = true;
        }
        tic.disabled = true;
        check();
        let isWinner=check();
if(count===9 && !isWinner){
    noWinner();
}
    })
});

// main logic part of the tic tac toe
const check = () => {
    for (let bo of winPatterns) {
        //         console.log(bo[0],bo[1],bo[2])
        // console.log(box[bo[0]],box[bo[1]],box[bo[2]])
        let val1 = box[bo[0]].innerHTML;
        let val2 = box[bo[1]].innerHTML;
        let val3 = box[bo[2]].innerHTML;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                return true;
            }
           
        }
    }
}

