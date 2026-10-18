let choice = document.querySelectorAll(".choice");
let userscore = document.getElementById("userscore");
let compscore = document.getElementById("compscore")
let ans = ["paper","rock","scissor"];



let user = "";
let comp = "";

let userPoint = 0;
let compPoint = 0;

choice.forEach((choices)=>{
  choices.addEventListener("click",() =>{
   user = choices.getAttribute("id");
    console.log("user choice is ",user);
    computer();
  })
})

function computer() {
    let computer = Math.floor(Math.random()*ans.length);
     comp = ans[computer];

    console.log("Computer choice is", comp);
    if (user === comp) {
        console.log("draw");
        
    }else if (
        (user === "rock" && comp === "scissor")||
        (user === "paper" && comp === "rock")||
        (user === "scissor" && comp === "paper")
    ) {
        console.log(` user win `);
       userPoint++;
       userscore.textContent = userPoint;
       

    }else{
        console.log(` win computer `);
        compPoint++;
        compscore.textContent =`  ${compPoint}`;
    }
    
}