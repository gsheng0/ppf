const path = require('path')
const express = require('express')
const app = express()

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

// //maze solver 
// app.get('/mazeSolver', (req, res) => {
//     // res.send('<h1>Maze Solver</h1')
//     // res.render('projects/bir/dDefense/birdDefense.html')
// })

// regression calculator

// bird defense
app.get('/birdDefense', (req, res) => {
    res.send('<h1>Bird Defense</h1')
    // res.render('indexBirdDefense.html')
})

// email formater
app.get('/emailFormatter', (req, res) => {
    res.send('<h1>Email Formatter</h1')
    // res.render('projects/birdDefense/birdDefense.html')
})
// knowledge base
app.get('/knowledgeBase', (req, res) => {
    res.send('<h1>Knowledge Base</h1')
    // res.render('projects/birdDefense/birdDefense.html')
})

// mine sweeper
app.get('/mineSweeper', (req, res) => {
    res.send('<h1>Mine Sweeper</h1')
    // res.render('projects/birdDefense/birdDefense.html')
})



// start 
app.listen(3000, () => {
    console.log('server is up on port 3000')
})

