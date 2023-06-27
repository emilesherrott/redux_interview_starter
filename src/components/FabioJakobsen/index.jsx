import React from "react"
import quickStep from '../../assets/images/quick-step.png'

const FabioJakobsen = () => {
  return (
    <div className="rider-details">
      <h2>Fabio Jakobsen</h2>
      <img src={quickStep} className="team-image"/>
      <p>Points: 0</p>
      <button>Award Points</button>
    </div>
  )
}

export default FabioJakobsen
