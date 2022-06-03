const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

router
  .route("/:id")
  .get((req, res) => {
    //id is only declared in this function scope

    const { id } = req.params

    if (id == 12) {
      res.send("🧑‍🦰: user is the 12th person on this site")
    }
    res.send(`🧑‍🦰: I am the user with an id of ${id}`)
  })
  .put((req, res) => {
    res.send(`Update user with the ID ${id}`)
  })
  .delete((req, res) => {
    res.send(`Delete user with the ID of ${id}`)
  })

module.exports = router
