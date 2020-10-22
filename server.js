const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pi.html"))
})

app.listen(PORT, () => {
    console.log("App is listening on port 3000")
})