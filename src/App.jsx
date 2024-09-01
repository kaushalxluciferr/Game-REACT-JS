
import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './SingleCard'
const cardimages=[{
"src":"/img/helmet-1.png",matched:false
},{
"src":"/img/potion-1.png",matched:false
},{
"src":"/img/ring-1.png",matched:false
},{
"src":"/img/scroll-1.png",matched:false
},{
"src":"/img/shield-1.png",matched:false
},{
"src":"/img/sword-1.png",matched:false
}]
function App() {

const [cards,setcards]=useState([])
const[turn,setturn]=useState(0)
const [choice1,setchoice1]=useState(null)
const [choice2,setchoice2]=useState(null)

//funtion to make card locate at random position 
const sufflecards=()=>{
  const suffledcard=[...cardimages,...cardimages]
    .sort(()=>Math.random() -0.5).map((card)=>({...card,id:Math.random()}))
    setcards(suffledcard);
    setturn(0);
}  
 //function to handle choice

 const handlechoice=(card)=>{
  console.log(card);
  choice1?setchoice2(card):setchoice1(card);
 }
// comparing two inputed cards
useEffect(()=>{
 if(choice1 &&choice2)
 {
  if(choice1.src===choice2.src)
    {
console.log("cards matched sucessfully");
setcards(prevCards=>{
  return prevCards.map(card=>{
    if(card.src==choice1.src)
    {
      return{...card,matched:true}
    } else{
      return card
    }
  })
})
resetturn();
    }
    else{
      console.log("hii no working");
     setTimeout(() => {
      resetturn();
     }, 1000); 
          }
 }
},[choice1,choice2])


console.log(cards);



const resetturn=()=>{
  setchoice1(null)
  setchoice2(null);
  setturn(turn=>turn+1)
}




  return (
   <>
  <div className="App">
    <h1>Magic Match</h1>
    <button onClick={sufflecards}>New Game</button>
<div className="card-grid">
  {
    cards.map(card=>(
     <SingleCard key={card.id} card={card} handlechoice={handlechoice} 
     flipped={card===choice1 ||card===choice2||card.matched}
     />
    ))
  }
</div>
<div className="turnnn">
  Your Turn : {turn}
</div>

  </div>
   
   </>
  )
}

export default App
