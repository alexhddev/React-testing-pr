import { useState } from "react";



type Comment = {
    content: string
}

let nextId = 0;

export function Post2(props: {
    content: string,
    user: string
}) {

    const [comment, setComment] = useState('')
    const [comments] = useState<Comment[]>([])

    return <div>
        <div data-testid="post-container">
            <h2>{props.user}:</h2>
            <p>{props.content}</p>
        </div>
        <div data-testid="comment-container">
            <input
                data-testid = "comment-input"
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button
                onClick={() => {
                    comments.push({ // test idea: add element to beginning of array
                        content: comment
                    })
                    setComment('')
                }}
            >Comment</button>
            {
                comments.map(comment => {
                    return <h4 key={nextId++}>{comment.content}</h4>
                })
            }
        </div>

    </div>

}