const User = require('../models/User');
const axios = require('axios');

const storeUserInfo = async (req,res) => {
    const { spotifyUserId, displayName, email, image, accessToken, refreshToken } = req.spotifyUserInfo;

    try {
        let existingUser = await User.findOne({where: {spotifyUserId}})

        if(!existingUser){
            existingUser = await User.create({
                spotifyUserId,
                displayName,
                email,
                image,
                accessToken,
                refreshToken
            });    
        } else {
            existingUser.accessToken =  accessToken;
            existingUser.refreshToken = refreshToken;
            await existingUser.save();
        }
        req.session.spotifyUserId = spotifyUserId
        req.session.accessToken = accessToken
        req.session.refreshToken = refreshToken
        res.redirect('http://localhost:5173/home');

    } catch (err) {
        console.error('Error handling Spotify user info:', err);
        res.status(500).send('Internal Server Error');
    }

}

module.exports = {storeUserInfo};