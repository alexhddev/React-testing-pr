import { act, render, screen, within } from "@testing-library/react"
import { Comment } from "../Model";
import { Post } from "./Post";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

describe('Post test suite - msw server tests', () => {
    const someUserName = 'Alex';
    const someContent = 'Some content'
    const someId = '123'
    const someComments: Comment[] = [
        {
            content: 'Cool!'
        },
        {
            content: 'Yes!'
        }
    ]

    const server = setupServer(
        http.get('http://localhost:4000/coments/*', () => {
            return HttpResponse.json(someComments)
        })
    )

    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());


    it('should load received comments', async () => {

        await act(async () => {
            render(<Post
                user={someUserName}
                content={someContent}
                id={someId}
            ></Post>)
        })

        const commentsContainer = screen.getByTestId('post-comment-container')
        const comments = within(commentsContainer).getAllByRole('paragraph')
        expect(comments.length).toBe(2)
        expect(comments[0]).toHaveTextContent(someComments[0].content)
        expect(comments[1]).toHaveTextContent(someComments[1].content)
    })
})