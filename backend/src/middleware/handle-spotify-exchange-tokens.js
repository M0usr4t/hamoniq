const {getSpotifyExchangeTokens} = require('../utils/get-spotify-exchange-tokens');

module.exports = async(req,res,next) => {
    const {code} = req.query;
    console.log('Authorization Code:', code);
    try{

        const { accessToken, refreshToken }  = await getSpotifyExchangeTokens(code);
        req.spotifyUserInfo = { accessToken, refreshToken };

        next();

    } catch(err){

        console.error('Error exchanging Spotify token: ', err)
        res.status(500).send('Internal server error')
        
    }
}