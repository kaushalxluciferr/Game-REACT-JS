import React from 'react'

function SingleCard({card,handlechoice,flipped}) {


    const handleclick=()=>{
handlechoice(card)
    }
  return (
    <div className='card' key={card.id}>
    <div className={flipped?"flipped":""}>
      <img src={card.src} className='front' />
      <img className='back' src="/img/cover.png"  onClick={handleclick}  />
    </div>
          </div>
  )
}

export default SingleCard
