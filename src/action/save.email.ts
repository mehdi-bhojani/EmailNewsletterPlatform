'use server'

import Email from "@/models/email.mode";
import { connectToAstraDb } from "@/app/shared/libs/db";

export const saveEmail = async({
    title,
    content,
    newsLetterOwnerId,

}:{
    title:string,
    content:string,
    newsLetterOwnerId:string,
})=>{
    try {
        await connectToAstraDb();
        const email = await Email.findOne({
            title,
            newsLetterOwnerId,
        });
        if(email){
            await Email.findByIdAndUpdate(email._id,{
                content,
            });
            return {message : "email update successfully"};
        }else{
            await Email.create({
                title,
                content,
                newsLetterOwnerId,
            });
            return {message : "email created successfully"};   
        }
    } catch (error) {
        console.error("Error saving email: ", error);
    }
}