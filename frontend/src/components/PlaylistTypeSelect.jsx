import React from 'react'

const PlaylistTypeSelect = ({userInput, setUserInput, onNext, username}) => {
  return (
    <div>
        <h1 className='welcome-header'>Hi, {username} </h1>
        <h2>What do you want out of your playlist?</h2>
        <button
            onClick={(e) => {setUserInput({...userInput, matchMood: true}); onNext()}}>
                Match my mood
        </button>
        <button
            onClick={(e) => {setUserInput({...userInput, matchMood: false}); onNext()}}>
                Make me feel a certain way
        </button>
    </div>

  )
}

export default PlaylistTypeSelect
