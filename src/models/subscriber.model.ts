import mongoose, { Schema } from "mongoose";

const subscriberSchema = new Schema({
    email : {
        type : String
    },
    newsLetterOwnerId : {
        type : String,
    },
},{timestamps : true})

const Subscriber = mongoose.models.Subscribes || mongoose.model("Subscribes",subscriberSchema);

export default Subscriber;