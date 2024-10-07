module.exports = (req, res, next) => {
    const { state } = req.query;

    if (state !== req.session.spotifyState) {
        return res.status(400).send('State Mismatch');
    }
    next(); 
};