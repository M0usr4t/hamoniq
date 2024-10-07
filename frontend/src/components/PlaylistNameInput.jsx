import React from 'react'

const PlaylistNameInput = ({userInput, setUserInput, onPrevious, handleCreatePlaylist}) => {
  return (
    <div>
        <h2>What do you want to name your playlist?</h2>
        <input
            type="text"
            placeholder='(optional)  ex. Cleaning the house playlist'
            onChange={(e) => setUserInput({ ...userInput, playlistTitle: e.target.value })}
        />
        <button onClick={() => onPrevious()}>Previous</button>
        <button onClick={handleCreatePlaylist}>Create my playlist</button>
    </div>
  )
}

export default PlaylistNameInput
