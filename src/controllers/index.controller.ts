import { Request, Response } from 'express'
import clc from 'cli-color'
import dotenv from 'dotenv'
import { respJson } from '../helpers/helpers'

dotenv.config()

export const registerGet =async (req:Request, res:Response) => {
    try {
        console.log(clc.green('*** GET'))
        return respJson(res,200,true,{msg:'ok'})
    } catch (error) {
        console.log(clc.red(error))
        return respJson(res,500,false,{msg:error})        
    }
}

export const registerPost =async (req:Request, res:Response) => {
    try {
        console.log(clc.cyan('*** POST'))
        return respJson(res,200,true,{msg:'ok'})
    } catch (error) {
        console.log(clc.red(error))
        return respJson(res,500,false,{msg:error})        
    }
}

export const registerPut =async (req:Request, res:Response) => {
    try {
        console.log(clc.yellow('*** PUT'))
        return respJson(res,200,true,{msg:'ok'})
    } catch (error) {
        console.log(clc.red(error))
        return respJson(res,500,false,{msg:error})        
    }
}