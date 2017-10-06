const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const carsTypeOne = JSON.parse(fs.readFileSync('data/car_type_one.json', 'utf8'));
const carsTypeTwo = JSON.parse(fs.readFileSync('data/car_type_two.json', 'utf8'));

// CAR TYPE ONE ROUTE
app.get('/api/car-type-one', (req, res) => {
	res.send(JSON.stringify(carsTypeOne));
});

// CAR TYPE TWO ROUTE
app.get('/api/car-type-two', (req, res) => {
	res.send(JSON.stringify(carsTypeTwo));
});

app.listen(port, () => {
	console.log(`Listening on Port: ${port}`);
});