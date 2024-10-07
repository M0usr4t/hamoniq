import React from 'react'

const EnergyInput = ({userInput, setUserInput, onNext, onPrevious}) => {
  return (
    <div>
        <h2>What kind of energy are you feeling?</h2>
        <div className="slider-labels">
            <span>I just want to vibe</span>
            <input
                type="range"
                min="1"
                max="10"
                value={userInput.energy}
                onChange={(e) => setUserInput({ ...userInput, energy: e.target.value })}
                className="vibe-dance-slider"
            />
            <span>On the dance floor</span>
        </div>
        <button onClick={() => onPrevious()}>Previous</button>
        <button onClick={() => onNext()}>Next</button>
    </div>
  )
}

export default EnergyInput
