const express = require('express')
const app = express()

const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:scores.sqlite')

class Score extends Model {}

Score.init({
    score: DataTypes.NUMBER,
}, { sequelize })

app.use(express.static('public'))
app.use(express.json())
app.post('/scores', async function(req, res){
    console.log(req.body)
    await Score.create(req.body)
    const scores = await Score.findAll()
    res.send(scores)
})

app.get('/scores', async (req, res) => {
    const scores = await Score.findAll()
    res.send(scores)
})

app.listen(5500, function(){
    sequelize.sync()
    console.log('The server is running')
})

