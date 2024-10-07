const express = require('express')
const router = express.Router();
const { authorizeSpotifyUser } = require('../controllers/auth-controller');
const verifyState = require('../middleware/verify-state');
const handleExchangeToken = require('../middleware/handle-spotify-exchange-tokens');
const getSpotifyUserInfo = require('../middleware/spotify-user-info');
const { storeUserInfo } = require('../controllers/user-info-controller');


router.get('/authorize-spotify-user', authorizeSpotifyUser);
router.get('/handle-spotify-user-info',
        verifyState,
        handleExchangeToken,
        getSpotifyUserInfo,
        storeUserInfo
    );

module.exports = router;