#!/usr/bin/env node

import { roll } from './lib/roll.js'
import minimist from "minimist"
import express from "express"

const app = express();
const args = minimist(process.argv.slice(2));

const port = args.port || 5000;
app.use(express.urlencoded({extended:true}));

app.get('/app/', (req,res) => {
	res.status(200);
	res.send("200 OK");
});

app.get('/app/roll', (req,res) => {
	res.send(roll(6,2,1));
	res.end();
});

app.post('/app/roll', (req,res,next) => {
	let sides = parseInt(req.body.sides);
	let dice = parseInt(req.body.dice);
	let rolls = parseInt(req.body.rolls);
	res.send(roll(sides,dice,rolls));
	res.end();
});

app.get('/app/roll/:sides/', (req,res,next) => {
	let sides = parseInt(req.params.sides);
	res.send(roll(sides, 2, 1));
	res.end();
});

app.get('/app/roll/:sides/:dice/', (req,res,next) => {
	let sides = parseInt(req.params.sides);
	let dice = parseInt(req.params.dice);
	res.send(roll(sides, dice, 1));
	res.end();
});

app.get('/app/roll/:sides/:dice/:rolls/', (req,res,next) => {
	let sides = parseInt(req.params.sides);
	let dice = parseInt(req.params.dice);
	let rolls = parseInt(req.params.rolls);
	res.send(roll(sides, dice, rolls));
	res.end();
});

app.use((req, res) => {
	res.status(404).send("404 NOT FOUND");
	res.end();
});

app.listen(port);


