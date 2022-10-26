const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/course.json');
const category = require('./data/category.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('learning server is running')
})

app.get('/course', (req, res) => {
    res.send(courses)
})
app.get('/category', (req, res) => {
    res.send(category)
})


app.listen(port, () => {
    console.log(`learning server running on port number${port}`);
})