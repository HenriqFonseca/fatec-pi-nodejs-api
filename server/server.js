const express = require("express")
const app = express()

require("dotenv").config();


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const cors = require("cors");
app.use(cors());

app.use(express.static('public'))

//routers
const clienteRoute = require("./routes/ClienteRouter")
const produtoRoute = require("./routes/ProdutoRouter")
const categoriaRoute = require("./routes/CategoriaRouter")
const variacaoRoute = require("./routes/VariacaoRouter")
const carrinhoRoute = require("./routes/CarrinhoRouter")
const pedidoRoute = require("./routes/PedidoRouter")
const corRoute = require("./routes/CorRouter")

app.use("/cliente", clienteRoute)
app.use("/produto", produtoRoute)
app.use("/categoria", categoriaRoute)
app.use("/variacao", variacaoRoute)
app.use("/carrinho", carrinhoRoute)
app.use("/pedido", pedidoRoute)
app.use("/cor", corRoute)

app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Aplicação rodando: http://localhost:${process.env.APP_PORT}`)
})