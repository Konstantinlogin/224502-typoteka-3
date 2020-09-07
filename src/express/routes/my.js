'use strict';

const {
  Router
} = require(`express`);
const my = new Router();

my.get(`/`, (req, res) => {
  res.render(`my/my`);
});
my.get(`/comments`, (req, res) => {
  res.render(`my/comments`);
});

module.exports = my;
