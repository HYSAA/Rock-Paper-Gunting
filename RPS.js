let btn= document.getElementById("button-el")
let screen= document.getElementById("element-El")
let rock
let paper
let gunting


 function startGame(){
 

 }
const random = () =>{
let modes= Math.floor(Math.random()*3)+1
return [rock,paper,gunting] [modes]
}
let result= random()

const logic = () =>{
  if(rock===true && gunting===false )
  console.log("You Win")
}