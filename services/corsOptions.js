const whitelist = [
    'https://www.yoursite.com', 
    'http://127.0.0.1:5500', 
    'http://localhost:5030',
    'http://localhost:5031'
]
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) callback(null, true)
        else callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions
