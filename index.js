const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 3000

const users = ["Asad", "Moin" , "Sabed", "Sushmita" , "Shabnur"]

app.get('/', (req, res) => {
    const fruits = {
        product: "apple",
        price: 220
    }
    // res.send('Hello World')
    res.send (fruits)
})

app.get('/fruits/banana' , (req, res) => {
    res.send({fruits: "banana" , price: 300, quantity: 30 })
})

app.get('/users/:id' , (req, res) => {
    const id = req.params.id
    // console.log(id)
    // console.log(req.query.sort)
    const name = users[id]
    res.send({id, name})
})

app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body
    user.id = 55 
    res.send (user)
    console.log(req.body)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})