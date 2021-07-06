var express = require('express') //install
var app = express()
const port = 8000
const data = require('./data.json')

app.use(express.json());

app.post('/login', (req, res) => {

    let email = req.body.email
    let password = req.body.password
    if(email && password){
        if(email === data.email && password === data.password){

            res.send("userLogin").status(201)
        }
        else{
            res.send("Incorrect username or password")
        }
    }else{
        res.send("Forbidden")
    }

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})