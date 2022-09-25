import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
//const PORT = 5000;
const app = express();

//http://localhost:5000/posts


app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
app.use('/posts',postRoutes)

const mongoDB = 'mongodb://localhost:27017/dbtutorial';
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoDB,   // refer to the config/dev/db.js file
{ 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
).catch(err => console.log('DB connection failed ' + err)
);

//mongoose.set('useFindAndModify',false);