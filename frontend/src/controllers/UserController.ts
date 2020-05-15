import {Request,Response} from 'express';  //tenho que importar os tipos do express para req e res serem reconhecidos
import EmailService from '../services/EmailService'

const users = [
{
    name : 'Antonio Gulherme', email: "antonio@gmail.com"
}
]


export default {
    async index(req:Request,res:Response){
        return res.json(users);
    }
   ,
    async create(req:Request,res:Response){
        const emailService = new EmailService();
        emailService.sendMail({
           to: {name : 'Antônio Guilherme',email:"vai ficar tudo bem"},
           message: {subject:'Bem-vindo ao sistema',body:"legal dms"}
        });
        return res.send();
    }


};