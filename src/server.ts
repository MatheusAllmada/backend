import express from "express"

const app = express()

//Rotas 
app.get("/",(request, response)=> { 
  return response.status(200).send("Deu bom")
 } )


app.listen(3333, () => console.log("Servidor iniciado na porta 3333"))