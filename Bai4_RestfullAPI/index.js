const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParter = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRouter = require('./routes/user');

const app = express();

dotenv.config();
// Connect Database
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connect DB is successfull!');
});

app.use(bodyParter.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));

// Routers
app.use('/api/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running...');
});
