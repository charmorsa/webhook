import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

export default class Server {
    public app: express.Application
    public port: number

    constructor(port: number) {
        this.port = port
        this.app = express()
    }
    static init (port: number) {
        return new Server(port)
    }
    start(callback: () => void) {
        this.app.use(cors());
        dotenv.config();
        this.app.listen(this.port, callback)
    }   
}
