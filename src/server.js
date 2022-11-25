const express = require ('express')
const database = require ('../db')
const router = require ('./routes.js')


const app = express()
app.use(express.json());
app.use(router)




const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=>{
    await database.authenticate().then(()=>{
        console.log('Conectou com o banco de dados')
    })
    console.log('O servidor está no ar')
})