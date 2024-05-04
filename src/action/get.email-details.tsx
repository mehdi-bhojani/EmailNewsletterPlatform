'use server';

import { connectToAstraDb } from "@/app/shared/libs/db";
import Email from "@/models/email.mode";


export const GetEmailDetails = async ({
    title,
    newsLetterOwnerId
}:{
    title: string,
    newsLetterOwnerId: string
}) => {
    try {
        await connectToAstraDb();
        const email = await Email.findOne({title,newsLetterOwnerId});
        if(email){
            return email;
        }
    } catch (error) {
        console.error("Error getting email details: ", error);
    }
}