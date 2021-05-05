const express = require('express')

const app = express();

app.get('/',(req,res,next) => {
    res.send({
        payload: "Hello World"
    })
})

app.listen(3020, () => {
    console.log("I'm listening on port 3020")
})