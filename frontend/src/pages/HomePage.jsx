import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import logoName from '../assets/logoName.png'
import background from '../assets/background.jpg'
import '../styles/HomePage.css'
import axios from 'axios';

import PlaylistTypeSelect from '../components/PlaylistTypeSelect';
import MoodInput from '../components/moodInput';
import EnergyInput from '../components/energyInput';
import GenreInput from '../components/genreInput';
import FavoriteArtistInput from '../components/favoriteArtistInput'
import PlaylistNameInput from '../components/playlistNameInput'

const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState({useRelatedArtists: false,});
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchHomepageInfo = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/homepage-info', { withCredentials: true,});
        
        setUserInput((prev) => ({ ...prev, username: res.data.username }));
        const formattedGenres = res.data.genres.map((genre) => ({ name: genre }));
        setGenreList(formattedGenres);
  
      } catch (err) {
        console.error('Error fetching homepage info:', err);
      }
    };

    fetchHomepageInfo();
  }, []);


  const handleCreatePlaylist = () => {
    console.log(userInput)
    //start making playlist
  }

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${background})` }}>
        <div className='content-container'>
            <img src= {logo} alt = 'harmoniq-logo' className='logo'/>
            <img src= {logoName} alt = 'harmoniq-logo' className='logo'/>
            {currentStep == 1 &&
              <PlaylistTypeSelect 
                userInput={userInput} 
                setUserInput={setUserInput} 
                onNext={onNext} 
                username = {userInput.username}
              />
            }
            {currentStep == 2 &&
              <MoodInput
                userInput={userInput} 
                setUserInput={setUserInput} 
                onNext={onNext} 
                onPrevious= {onPrevious}
            />
            }     
              {currentStep == 3 &&
                <EnergyInput
                  userInput={userInput} 
                  setUserInput={setUserInput} 
                  onNext={onNext} 
                  onPrevious= {onPrevious}
                />
              }
              {currentStep == 4 && (
                <GenreInput
                  userInput={userInput} 
                  setUserInput={setUserInput} 
                  onNext={onNext} 
                  onPrevious= {onPrevious}
                  genreList={genreList}
                />
              )}
            {currentStep == 5 &&
              <FavoriteArtistInput
                userInput={userInput} 
                setUserInput={setUserInput} 
                onNext={onNext} 
                onPrevious= {onPrevious}
              />
            }
            {currentStep == 6 &&
              <PlaylistNameInput 
              userInput={userInput} 
              setUserInput={setUserInput} 
              onNext={onNext} 
              onPrevious= {onPrevious}
              handleCreatePlaylist={handleCreatePlaylist}
              />
            }
        </div>
    </div>
  )
}

export default HomePage
