let youscore = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msgbox = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const gencompchoice = ()=>{
      const options = ["rock","paper","scissor"]; 
      let   ranidx = Math.floor(Math.random()*3);
      return options[ranidx];
}
const playgame = (userChoice)=>{
      console.log("User has chosen",userChoice);
      const compchoice = gencompchoice();
      console.log("Computer has chosen",compchoice);

      if(userChoice === compchoice){
        console.log("Result is Draw");
        msgbox.innerText = "Match is Draw";
        msgbox.style.backgroundColor = "#d3d3d3";
      }
      else if(userChoice === "rock" && compchoice === "scissor"){
             msgbox.innerText = "You Won";
             youscore++;
             userscore.textContent = youscore;
             msgbox.style.backgroundColor = "green";
      }
      else if(userChoice === "rock" && compchoice === "paper"){
             msgbox.innerText = "You Lose !";
             comp++;
             compscore.textContent = comp;
             msgbox.style.backgroundColor = "red";
      }
      else if(userChoice === "paper" && compchoice === "rock"){
             msgbox.innerText = "You Won";
             youscore++;
             userscore.textContent = youscore;
             msgbox.style.backgroundColor = "green";
      }
      else if(userChoice === "paper" && compchoice === "scissor"){
             msgbox.innerText = "You lose !";
             comp++;
             compscore.textContent = comp;
             msgbox.style.backgroundColor = "red";
      }
      else if(userChoice === "scissor" && compchoice === "rock"){
             msgbox.innerText = "You lose !";
             comp++;
             compscore.textContent = comp;
             msgbox.style.backgroundColor = "red";
      }
      else if(userChoice === "scissor" && compchoice === "paper"){
             msgbox.innerText = "You Won";
             youscore++;
             userscore.textContent = youscore;
             msgbox.style.backgroundColor = "green";
      }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked");
        playgame(userChoice);
    });
});



