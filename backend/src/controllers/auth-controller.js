const queryString = require('querystring');
const crypto = require('crypto');
const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;


const authorizeSpotifyUser = (req,res) => {
    const state = crypto.randomBytes(16).toString('hex');
    const scope = 'user-read-private user-read-email'

    // storing in session so we can track user across multiple requests
    req.session.spotifyState = state
    
    res.redirect('https://accounts.spotify.com/authorize?' +
        queryString.stringify({
            response_type: 'code',
            client_id: SPOTIFY_CLIENT_ID,
            scope: scope,
            redirect_uri: SPOTIFY_REDIRECT_URI,
            state: state
        })
    )
}

module.exports = {authorizeSpotifyUser};