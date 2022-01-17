const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/mern_test', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);




// Models
const Todo = require('./models/Todo');


// creating endpoint
app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

app.listen(3001);