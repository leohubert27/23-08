import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/',(requisicao, resposta)=>{
    resposta.send('Olá mundo!')
})

app.get('/teste',(requisicao, resposta)=>{
    resposta.json({msg: 'Testeee'})
})

//mostra a tabuada do 5 usando o resposta.send
app.get('/tabuada',(requisicao, resposta)=>{
    const multi = 5
    let tabuadaPronta = ''

    for (let i = 1; i <= 10; i++){
        tabuadaPronta += `<p> ${multi} x ${i} = ${multi*i} </p>`
    }

    resposta.send(tabuadaPronta)
})


// node server.js - rodar a API
app.listen(port, () =>{
    console.log(`API Rodando em http://localhost:${port}`)
})