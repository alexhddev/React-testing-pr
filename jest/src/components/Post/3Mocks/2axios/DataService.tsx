import axios from "axios";
import { Comment } from "../Model";

const APP_URL = 'http://localhost:4000'

export async function getCommentsForPostWithAxios(id: string): Promise<Comment[]> {
    // if (id === '555') {
    //     throw new Error("Endpoint unreachable");
        
    // }
    const response = await axios.get<Comment[]>(`${APP_URL}/comments/` + id ,{
        params: {
            id: id
        }
    })
    return response.data
}