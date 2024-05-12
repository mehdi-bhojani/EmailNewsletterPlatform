"use server";

import { connectToAstraDb } from "@/app/shared/libs/db";
import {validateEmail} from "@/app/shared/utils/zeroBounceApi";
import Subscriber from "@/models/subscriber.model";
import { clerkClient } from "@clerk/nextjs";

export const subscribe = async ({
    email,
    username,
}: {
    email: string;
    username: string;
}) => {
    try {
        // fetch all users
        const users = await clerkClient.users.getUserList();
        
        //find owner name
        const owner = await users.find((elem) => elem.username === username);
        
        if (!owner) {
            return { error: "Username is not valid" };
        }

        await connectToAstraDb();
        //check if subscribe exists
        const isExistSubscribe = await Subscriber.findOne({
            email,
            newsLetterOwnerId: owner?.id,
        });
        
        if (isExistSubscribe != null) {
            return { error: "Already subscribed" };
        }

        //validate response
        const validateResponse = await validateEmail({ email });
        if (validateResponse.status === "invalid") {
            return { error: "Invalid email" };
        }
        

        const susbcriber = await Subscriber.create({
            email,
            newsLetterOwnerId: owner?.id,
            source: "By MB",
            status: "Subscribed",
        });
        
        return susbcriber;
    } catch (error) {        
        return { error: "Error subscribing" + error };
    }
};
