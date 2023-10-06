const express = require('express')
const app = express()
const router = express.Router()
var session = require('express-session')
const controller = require("../controllers/ClienteController")

router.post("/auth/login", controller.login)

//* Create cliente
router.post('/auth/register', controller.register)

//* exibir todos os clientes
router.get('/',controller.getAllCliente)

//* Read
router.get('/:id', controller.getOneCliente)

//* update
router.put('/:id',controller.updateCliente)

//* delete
router.get('/:id',controller.deleteCliente)

module.exports = router