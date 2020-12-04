import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
        user: "privatefilms.fan@gmail.com",
        pass: "chamati127",
    }
});

function SendMail(options){
    return new Promise( (resolve, reject) => {
        transport.sendMail(options, (error, info) => {
            if(error){
                reject(error);
            }
            else{
                resolve(info);
            }
        });
    });
}

export default SendMail;