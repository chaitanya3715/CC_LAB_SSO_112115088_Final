const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = ''
const db = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports =db; 