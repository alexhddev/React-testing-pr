import { act, render, screen, within } from "@testing-library/react"
import { Comment } from "../Model";
import axios from 'axios'
import { Post } from "./Post";

describe('Post test suite - mocking axios tests', () => {
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

    it('should load received comments', async () => {
        const axiosGetSpy = jest.spyOn(axios, 'get')
        axiosGetSpy.mockResolvedValueOnce({
            data: someComments
        })
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

    it('should call service to load comments', async () => {
        const axiosGetSpy = jest.spyOn(axios, 'get')
        axiosGetSpy.mockResolvedValueOnce({
            data: someComments
        })
        await act(async () => {
            render(<Post
                user={someUserName}
                content={someContent}
                id={someId}
            ></Post>)
        })

        expect(axiosGetSpy).toHaveBeenCalledTimes(1) // not toHaveBeenCalledOnce
        // expect(axiosGetSpy).toHaveBeenCalledWith('') // won't work
        const axiosGetSpyCallUrl = axiosGetSpy.mock.calls[0][0]
        const axiosGetSpyCallId = axiosGetSpy.mock.calls[0][1]?.params.id
        console.log(axiosGetSpy.mock.calls)
        console.log(axiosGetSpy.mock.calls[0][1]?.params)
        expect(axiosGetSpyCallUrl.endsWith(someId)).toBe(true);
        // easier:
        expect(axiosGetSpyCallId).toBe('123')
    })
})