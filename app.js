let usercore = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");


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
      }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked");
        playgame(userChoice);
    });
});



