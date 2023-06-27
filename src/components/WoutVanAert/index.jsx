import React from 'react'
import jumboVisma from '../../assets/images/jumbo-visma.png'

const WoutVanAert = () => {
  return (
    <div className="rider-details">
    <h2>Wout Van Aert</h2>
    <img src={jumboVisma} className="team-image"/>
    <p>Points: 0</p>
    <button>Award Points</button>
  </div>
  )
}

export default WoutVanAert