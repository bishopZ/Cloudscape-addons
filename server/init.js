const http = require('http');
const fs = require('fs');
const path = require('path');
const articles = require('./articles');
const express = require('express')

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;
const app = express()

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/api/articles', (request, response) => {
  console.log('sent articles')
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  response.setHeader('Access-Control-Allow-Origin', 'https://bishopz.herokuapp.com/');
  response.setHeader('Access-Control-Allow-Origin', 'https://bishopz.com/');
  response.json(articles())
})

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT)

console.log(`Server is running on http://${HOST}:${PORT}`);
