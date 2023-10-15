import { CreateUserDto } from "../../dtos/user/create-user.dto";
import { UpdateUserDto } from "../../dtos/user/update-user.dto";
import { IUser } from "../../types/user.type";
import { $axios } from "../axios"

export const UserService = {
    createUser: async (dto: CreateUserDto) => {
        const response = await $axios.post<Promise<IUser>>('/users', dto);

        return response.data;
    },

    updateUser: async (dto: UpdateUserDto) => {
        const response = await $axios.put<Promise<IUser>>('/users', dto);

        return response.data;
    },

    getUsers: async () => {
        const response = await $axios.get<Promise<IUser[]>>('')

        return response.data;
    },

    getUser: async (id: number) => {
        const response = await $axios.get<Promise<IUser>>(`get-one/${id}`);
    
        return response.data;
    }
}
