const User = require('../models/User')

const getHomepageIngo = async (req, res) => {
    try {

        const spotifyUserId = req.session.spotifyUserId

        if (!spotifyUserId){
            return res.status(401).json({message: "User not found in session"});
        }

        let user = await User.findOne({where: {spotifyUserId}})

        if(!user){
            return res.status(404).json({message: "User not found in database"})
        }

        res.json({
            username: user.displayName,
            genres: req.spotifyGenres
        })

    } catch(err){
        console.error("Error fetching homepage info", err);
        res.status(500).json({message: "Internal server error."})
    }
}

module.exports = getHomepageIngo;