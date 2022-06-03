const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  const { name } = req.query

  res.send(`🧑‍🦰I am the user with the name of ${name}`)
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

const users = [{ name: "Kehinde" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})

router
  .route("/:id")
  .get((req, res) => {
    res.send(`🧑‍🦰: I am the user with a name of ${id}`)
  })
  .put((req, res) => {
    const { id } = req.params

    res.send(`Update user with the ID ${id}`)
  })
  .delete((req, res) => {
    const { id } = req.params

    res.send(`Delete user with the ID of ${id}`)
  })

module.exports = router
