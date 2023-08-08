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
  if(rock==="rock" && gunting==="gunting"){
  console.log("Rock Wins!!!")
}else if(gunting==="gunting" && paper==="paper" ){
console.log("Gunting wins!!!")
}else if(paper==="paper" && rock==="rock"){
  console.log("Paper wins!!!")
}
}