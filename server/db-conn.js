const mongoose = require('mongoose');

const { DB_CONN, DB_USER, DB_PW} = process.env;

mongoose.connect(DB_CONN, 
    {auth: { username: DB_USER, password: DB_PW}})
    .then(() => console.log("Successfully connected to DB"))
    .catch(console.error)