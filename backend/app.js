const express = require('express')
const cors = require('cors')
const session = require('express-session')
const sequelize = require('./src/config/db')
const authorizeSpotifyUserRoute = require('./src/routes/auth-routes')
const homepageInfoRoute = require('./src/routes/homepage-info-routes')

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}
));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set `secure: true` in production with HTTPS
}));

app.use('/api',authorizeSpotifyUserRoute)
app.use('/api',homepageInfoRoute)

//use mySql, align model with tables in mydb
sequelize
    .sync({forse: false})
    .then(() => {
        console.log('Database synced.')
    })
    .catch((err) => {
        console.error('Error syncing database:', err)
    })

module.exports = app;