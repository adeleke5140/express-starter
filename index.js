const express = require("express")
const app = express()

const PORT = 8080

app.get("/", (req, res) => {
  res.send("Server is working quite okay")
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})
