import { IActivity } from "../../types/activity.type";
import { $axios } from "../axios"

export const HistoryService = {
    fetchHistory: async (userId: number) => {
        const response = await $axios.get<Promise<IActivity[]>>(`/users/activities/${userId}`);

        return response.data;
    }
}