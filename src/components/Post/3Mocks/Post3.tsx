import { useState, useEffect } from "react";
import { getCommentsForPost } from "./DataService";



export type Comment = {
    content: string
}

let nextId = 0;

export function Post3(props: {
    content: string,
    user: string,
    id: string
}) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(()=>{
        const fetchComments = async ()=>{
            const comments = await getCommentsForPost(props.id)
            setComments(comments)
        }
        fetchComments();
    }, [])

    return <div>
        <div data-testid="post-container">
            <h2>{props.user}:</h2>
            <p>{props.content}</p>
        </div>
        <div data-testid="comment-container">
            <input
                data-testid="comment-input"
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button
                onClick={() => {
                    comments.push({
                        content: comment,
                    })
                    setComment('')
                }}
            >Comment</button>
            <div data-testid="post-comment-container">
                {
                    comments.map(comment => {
                        return <p key={nextId++}>{comment.content}</p>
                    })
                }
            </div>

        </div>

    </div>

}