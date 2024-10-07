import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

const GenreInput = ({userInput, setUserInput, onNext, onPrevious, genreList}) => {
  return (
    <div className = "genre-multiselect">
        <h2>What genres are you interested in?</h2>
        <p>Select none if you want all genres</p>
        <Multiselect
            className = "multiselect"
            displayValue = "name"
            isObject = {true}
            options = {genreList} // get this from spotify api
            selectedValues={userInput.userGenres}
            showCheckbox={true} 
            showSearch={true}  
            placeholder="Search genres"
            onRemove={(selectedList) => {
            setUserInput(prev => ({ ...prev, userGenres: selectedList }));
            }}
            onSelect={(selectedList) => {
            setUserInput(prev => ({ ...prev, userGenres: selectedList }));
            }}
        />
        <button onClick={() => onPrevious()}>Previous</button>
        <button onClick={() => onNext()}>Next</button>
    </div>
  )
}

export default GenreInput
