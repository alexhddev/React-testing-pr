

export function Post(props: {
    content: string,
    user: string
}){

    return <div data-testid="post-container">
        <h2>{props.user}:</h2>
        <p>{props.content}</p>
        <p>Footer</p>
    </div>

}