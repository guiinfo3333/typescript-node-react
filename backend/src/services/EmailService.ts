interface IMailTo{  //quando quero q  a minha variavel seja do tipo objeto eu declaro uma interface
name:string;
email:string;
}

interface IMailMessage{
subject:string;
body:string;
attachment?:string[];  // ?-pode ou nao existir e é do tipo array
}

interface IMailMessageDTO{
    to:IMailTo,
    message:IMailMessage;
}


class EmailService {

    sendMail({to,message}:IMailMessageDTO){
        console.log(`Email enviado para ${to.name}  : ${message.subject}`)
    }

}


export default EmailService;