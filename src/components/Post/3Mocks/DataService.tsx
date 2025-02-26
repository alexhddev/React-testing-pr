import { Comment } from "./Post3"

export async function getCommentsForPost(id: string): Promise<Comment[]> {
    const comments: Comment[] = []
    comments.push({
        content: 'This is awesome!',
    })
    comments.push({
        content: 'Nice car!',
    })
    return comments;
}