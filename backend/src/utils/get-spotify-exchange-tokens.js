const axios = require('axios')
const queryString = require('querystring')
const { SPOTIFY_CLIENT_ID, 
        SPOTIFY_CLIENT_SECRET, 
        SPOTIFY_REDIRECT_URI } = process.env;

async function getSpotifyExchangeTokens(code) {
    try{
        const res = await axios.post(
            "https://accounts.spotify.com/api/token",
            queryString.stringify({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: SPOTIFY_REDIRECT_URI,
                client_id: SPOTIFY_CLIENT_ID,
                client_secret: SPOTIFY_CLIENT_SECRET
            }
        ),  {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        )

        console.log('Spotify token response:', res.data);
        if (!res || !res.data) {
            throw new Error('Invalid response from Spotify');
        }
        return {
            accessToken: res.data.access_token,
            refreshToken: res.data.refresh_token
        };
    }   catch(err){
            console.error("Error getting exchange token: ", err)
        }
}

module.exports = {
    getSpotifyExchangeTokens
};