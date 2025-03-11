import { act, render, screen, within } from "@testing-library/react"
import * as DataService from './DataService'
import { Post } from "./Post"

describe('Mock test', () => {

    it('should do mock', async () => {
        const getCommentsSpy = jest.spyOn(DataService, 'getCommentsForPost')
        getCommentsSpy.mockResolvedValueOnce([{
            content: 'Cool1'
        },
        {
            content: 'Cool2'
        }])
        await act(async () => {
            render(<Post 
                user={'asd'}
                content={'sdf'}
                id={'123'}
            ></Post>)
        })
        const commentsContainer = screen.getByTestId('post-comment-container')
        const comments = within(commentsContainer).getAllByRole('paragraph')
        expect(comments.length).toBe(2)
        expect(comments[0]).toHaveTextContent('Cool1')
        expect(comments[1]).toHaveTextContent('Cool2')
        expect(getCommentsSpy).toHaveBeenCalledTimes(1)
        expect(getCommentsSpy).toHaveBeenCalledWith('123')
    })
})