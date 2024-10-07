const axios = require('axios')

const getSpotifyGenres = async (req,res,next) => {
    const accessToken = req.session.accessToken

    if(!accessToken){
        return res.status(401).json({message: 'No access token'})
    }

    try {
        const response = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        req.spotifyGenres = response.data.genres;

        next();

    } catch(err){
        console.error('Error fetching Spotify genres:', err);
        res.status(500).json({ message: 'Failed to fetch Spotify genres' });
    }
}

module.exports = getSpotifyGenres;