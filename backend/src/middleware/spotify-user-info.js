const axios = require('axios')

module.exports = async (req,res,next) => {
    const { accessToken } = req.spotifyUserInfo;

    try {
        const spotifyUserInfoResponse = await axios.get(
            'https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
        });
        const {id: spotifyUserId, display_name: displayName, email, images} = spotifyUserInfoResponse.data
        const image = images.length ? images[0].url : null
        
        req.spotifyUserInfo = {
            ...req.spotifyUserInfo,
            spotifyUserId,
            displayName,
            email,
            image,
        };

        next();

    } catch(err){
        console.error('Error getting user info from spotify: ', err)
    }
}