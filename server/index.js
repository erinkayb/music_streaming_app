const express = require( "express" )
const bodyParser = require( "body-parser" )
const cors = require( "cors" )
const morgan = require( "morgan" )

const app = express()
const fs = require( 'fs' )

app.use( morgan( 'combined' ))
app.use( cors() )
app.use( bodyParser.json() )

const port = 3000

let data = [{
    "user_id": 1,
    "track_id": "track1",
    "label": "label1",
    "stream_started_on": 1546421951,
    "seconds_streamed": 1290
}]

app.get('/all', (req, res) => {
    res.send(data)
})

app.get('/usage', (req, res) => {
    if (req.query.from < Math.round(new Date().getTime() / 1000)){
        let resData = []
        for(let i = 0; i < data.length; i++){
            if(req.query.from < data[i].stream_started_on){
                resData.push(data[i])
            }
        } 
        res.send(resData)
    } else {
        res.status(400);
        res.send({})
    }
})

newNumber = () => {
    return newData = {
        "user_id": (Math.floor(Math.random() * 3) + 1),
        "track_id": "track" + (Math.floor(Math.random() * 3) + 1),
        "label": "label" + (Math.floor(Math.random() * 3) + 1),
        "stream_started_on": Math.round(new Date().getTime() / 1000),
        "seconds_streamed": Math.floor(Math.random() * 1000)
    }
}

newData = (req, res) => {
    let number
    setInterval( () => {
        number = (Math.floor((Math.random() * 5) + 1))
        console.log(number)
        for(let i = 0; i < number; i++){
            data.push(newNumber())
        }
    }, 10000)
}
newData()


app.listen(port, () => console.log(`Listening on port ${port}!`))
