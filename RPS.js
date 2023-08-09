let btn= document.getElementById("button-el")
let screen= document.getElementById("element-El")

// let cards={
//   rock:"rock",
//   paper:"paper",
//   scissors:"scissors"
// }
const cards = {rock: "✊", paper: "🤚", scissors: "✌"};
// let cards = [
//   {
//     key: "rock",
//     value: "rock"
//   },
//   {
//     key: "paper",
//     value: "paper"
//   }
// ];
console.log(cards.rock)
 function startGame(){
 

 }
const random = () =>{
let index= Math.floor(Math.random()*3)
let index1= Math.floor(Math.random()*3)
let player=cards[index]
let computer=cards[index1]
return[player,computer]
}
screen.addEventListener("click",function(){
let result= random()
console.log(result)
screen.textContent=result[0] + " VS "+ result[1];
})
const logic = () =>{
  if(cards.rock=== "✊" && cards.scissors==="✌"){
  console.log("Rock Wins!!!")
}else if(cards.scissors==="✌" && cards.paper==="🤚" ){
console.log("Gunting wins!!!")
}else if(cards.paper==="🤚" && cards.rock==="✊"){
  console.log("Paper wins!!!")
}
}