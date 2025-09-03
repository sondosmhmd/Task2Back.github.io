

const request = require("request")

const forecast = require("./data/forecast.js")
const geocode = require("./data/geocode.js")


const address =process.argv[2]

geocode(address, (error , data)=>{
    console.log("ERROR: " + error)
    console.log("Data: " + JSON.stringify(data))

        forecast(data.latitude, data.longtitude, (error, data)=>{
            console.log("ERROR: " + error)
            console.log("Data: "+ data)
        })

})