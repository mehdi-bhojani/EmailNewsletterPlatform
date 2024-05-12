'use server';

import { connectToAstraDb } from "@/app/shared/libs/db";
import Subscriber from "@/models/subscriber.model"

export const getSubscribers = async({newsLetterOwnerId}:{newsLetterOwnerId:string}) => {
    try {
        await connectToAstraDb();
        const subscribers = await Subscriber.find({
            newsLetterOwnerId: newsLetterOwnerId
        })
        return subscribers
    } catch (error) {
        console.log(error)
    }
}