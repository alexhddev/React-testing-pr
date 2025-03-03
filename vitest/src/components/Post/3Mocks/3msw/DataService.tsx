import axios from "axios";
import { Comment } from "../Model";

export async function getCommentsForPostWithAxios(id: string): Promise<Comment[]> {
    const response = await axios.get<Comment[]>('http://localhost:4000/coments/' + id)
    return response.data
}