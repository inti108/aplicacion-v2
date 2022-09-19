const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

app.set('views','./views')

app.set('view engine','ejs')

app.get('/', (pedido, respuesta) => {
    respuesta.render('index')
})

app.listen(port)