import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const FavoriteArtistInput = ({userInput, setUserInput, onNext, onPrevious}) => {
  return (
    <div className="switch-container">
        <label className="checkbox-label">
            <Checkbox
            checked={userInput.useRelatedArtists}
            onChange={(e) => setUserInput({ ...userInput, useRelatedArtists: !userInput.useRelatedArtists })}
            />
            Use some of your favorite artists in the playlist?
        </label>
        <div className="button-group">
            <button onClick={() => onPrevious()}>Previous</button>
            <button onClick={() => onNext()}>Next</button>
        </div>
    </div>
  )
}

export default FavoriteArtistInput
