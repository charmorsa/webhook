import express from 'express'
import Server from "./server/server"
import cors from 'cors'
import router  from './routers/index.router'
import dotenv from 'dotenv'
import clc from 'cli-color'

dotenv.config()

const puerto:number = Number(process.env.PORT)
const server = Server.init(puerto)

async function main(){
    server.app.use(express.json())
    server.app.use(cors())
    server.app.use('/', router)
    server.start(() => { 
        console.log(clc.magenta(' ============================================ ')),
        console.log(clc.yellow(` ======   Server Start at Port :${puerto}   ====== `)),
        console.log(clc.magenta(' ============================================ '))
    })    
}

main()