import { act, render, screen, within } from "@testing-library/react"
import { Post3 } from "./Post3";
import * as DataService from './DataService'
import { Comment } from "../Model";

describe('Post 3 test suite - simple mocks tests', () => {
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
    it('should call service to load comments', async () => {
        const getCommentsForPostSpy = vi.spyOn(DataService, 'getCommentsForPost');

        await act(async () => { // should show what happens without act and await
            render(<Post3
                user={someUserName}
                content={someContent}
                id={someId}
            ></Post3>)
        })

        expect(getCommentsForPostSpy).toHaveBeenCalledOnce()
        expect(getCommentsForPostSpy).toHaveBeenCalledWith(someId)
    })

    it('should load received comments', async () => {
        const getCommentsForPostSpy = vi.spyOn(DataService, 'getCommentsForPost');
        getCommentsForPostSpy.mockResolvedValueOnce(someComments)

        await act(async () => {
            render(<Post3
                user={someUserName}
                content={someContent}
                id={someId}
            ></Post3>)
        })

        const commentsContainer = screen.getByTestId('post-comment-container')
        const comments = within(commentsContainer).getAllByRole('paragraph')
        expect(comments.length).toBe(2)
        expect(comments[0]).toHaveTextContent(someComments[0].content)
        expect(comments[1]).toHaveTextContent(someComments[1].content)
    })
})