// let btn= document.getElementById("button-el")
// let screen= document.getElementById("element-El")

// // let cards={
// //   rock:"rock",
// //   paper:"paper",
// //   scissors:"scissors"
// // }
// const cards = {rock: "✊", paper: "🤚", scissors: "✌"};
// // let cards = [
// //   {
// //     key: "rock",
// //     value: "rock"
// //   },
// //   {
// //     key: "paper",
// //     value: "paper"
// //   }
// // ];
// console.log(cards.rock)
//  function startGame(){
 

//  }
// const random = () =>{
// let index= Math.floor(Math.random()*3)
// let index1= Math.floor(Math.random()*3)
// let player=cards[index]
// let computer=cards[index1]
// return[player,computer].map((item) => {
//   return item.toString();
// })
// }
// screen.addEventListener("click",function(){
// let result= random()
// console.log(result)
// screen.textContent=result[0] + " VS "+ result[1];
// })
// let btn = document.getElementById("button-el");
// let screen = document.getElementById("element-El");

// const cards = {rock: "✊", paper: "🤚", scissors: "✌"};

// console.log(cards.rock);

// function startGame() {
//   // do something
// }

// const random = () => {
//   let index = Math.floor(Math.random() * 3);
//   let index1 = Math.floor(Math.random() * 3);
//   let player = cards[index];
//   let computer = cards[index1];
//   return [player, computer].map((item) => {
//     return item.toString();
//   });
// };

// screen.addEventListener("click", function () {
//   let result = random();
//   screen.textContent = result[0] + " VS " + result[1];
// });


// const logic = () =>{
//   if(cards.rock=== "✊" && cards.scissors==="✌"){
//   console.log("Rock Wins!!!")
// }else if(cards.scissors==="✌" && cards.paper==="🤚" ){
// console.log("Gunting wins!!!")
// }else if(cards.paper==="🤚" && cards.rock==="✊"){
//   console.log("Paper wins!!!")
// }
// }
let btn = document.getElementById("button-el");
let screen = document.getElementById("element-El");
let playerscreen=document.getElementById("elements-El")

// const cards = {rock: "✊", paper: "🤚", scissors: "✌"};
let cards=["rock","paper","scissors"]
console.log(cards.rock);

function startGame() {
  // do something

}

const random = () => {
  let index = Math.floor(Math.random() * 3);
  let index1 = Math.floor(Math.random() * 3);
  let player = cards[index];
  let computer = cards[index1];
  return [player, computer].map((item) => {
    return item.toString();
  });
};

btn.addEventListener("click", function () {
  let result = random();
  screen.innerText = result[0] + " VS " + result[1]+ "\n "+logic();

});


const logic = () => {
  let player = cards[Math.floor(Math.random() * 3)];
  let computer = cards[Math.floor(Math.random() * 3)];

  if (player === "rock" && computer === "scissors") {
    return("Rock Wins!!!");
  } else if (player === "scissors" && computer === "paper") {
    return("Scissors Wins!!!");
  } else if (player === "paper" && computer === "rock") {
    return("Paper Wins!!!");
  }
  else{
    return ("Draw Game!!!");
  }
};

btn.addEventListener("click", logic);