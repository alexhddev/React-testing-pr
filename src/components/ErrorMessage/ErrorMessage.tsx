

export function ErrorMessage(props: {
    message: string
}) {

    return (
        <div data-testid="message-container">{props.message}</div>
    )
}


