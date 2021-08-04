import express from 'express';
const router = express.Router();
const userPost = require('./posts.js');

//routes mozna tu dodac

function getAllPayments(req, re, next) {
  userPost
    .getAllPayments()
    .then((payments) => res.json())
    .catch((err) => next(err));
}
