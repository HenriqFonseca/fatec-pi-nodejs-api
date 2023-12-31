const express = require('express')
const router = express.Router()

const controller = require("../controllers/ProdutoController")

const upload = require("../config/multerConfig")

//* Create produto
router.post('/', upload.array("file"),controller.createProduto)

//* exibir todos os produtos
router.get('/', controller.getAllProduto)

//* Pesquisa de produto
router.get('/pesquisa', controller.searchProduto)

//* Read
router.get('/:id', controller.getOneProduto)

//* update
router.put('/:id',upload.array("file"),controller.updateProduto)

//* delete
router.delete('/:id', controller.deleteProduto)

//* deleteOneImage
router.delete('/delete/image/:id', controller.deleteOneImagem)

module.exports = router