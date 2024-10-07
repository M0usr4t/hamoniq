import React from 'react'

const MoodInput = ({userInput, setUserInput, onNext, onPrevious}) => {
  return (
    <div>
        {userInput.matchMood ? (
            <>
                <h2>Describe how you're feeling</h2>
                <input
                    type="text"
                    placeholder='ex. I am having a rough day..'
                    onChange={(e) => setUserInput({ ...userInput, feeling: e.target.value })}
                />
            </>
        ):(
            <>
                <h2>Describe how you want to feel</h2>
                <input
                type="text"
                placeholder='ex. I want to get hyped I am about to run..'
                onChange={(e) => setUserInput({ ...userInput, feeling: e.target.value })}
                />
            </>
        )}
        <button onClick={() => onPrevious()}>Previous</button>
        <button onClick={() => onNext()}>Next</button>
    </div>
  )
}

export default MoodInput
