const cells=document.querySelectorAll(".cell");
const statusText=document.querySelector(".status");

let board=["","","","","","","","",""];

let currentPlayer="X";

let running=true;

const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell=>{
    cell.addEventListener("click",clickCell);
});

function clickCell(){

let index=this.dataset.index;

if(board[index]!==""||!running)
return;

board[index]=currentPlayer;

this.innerHTML=currentPlayer;

checkWinner();

}

function checkWinner(){

let win=false;

for(let pattern of winPatterns){

let a=board[pattern[0]];
let b=board[pattern[1]];
let c=board[pattern[2]];

if(a==""||b==""||c=="")
continue;

if(a===b&&b===c){

win=true;
break;

}

}

if(win){

statusText.innerHTML="Pemain "+currentPlayer+" Menang 🎉";
running=false;
return;

}

if(!board.includes("")){

statusText.innerHTML="Permainan Seri";

running=false;

return;

}

currentPlayer=currentPlayer==="X"?"O":"X";

statusText.innerHTML="Giliran : "+currentPlayer;

}

function resetGame(){

board=["","","","","","","","",""];

currentPlayer="X";

running=true;

cells.forEach(cell=>{

cell.innerHTML="";

});

statusText.innerHTML="Giliran : X";

}