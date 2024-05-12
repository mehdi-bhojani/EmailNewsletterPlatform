"use server";

import Subscriber from "@/models/subscriber.model";
import { generateAnalyticsData } from "@/app/shared/utils/analytics.generators";

export const subscribersAnalytics = async () => {
  try {
    const subscribers = await generateAnalyticsData(Subscriber);
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};