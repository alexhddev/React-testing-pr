import { act, render, screen, within } from "@testing-library/react"
import { Post } from "./Post"



jest.mock('./DataService', () => ({
    getCommentsForPost:()=> {
        console.log('Calling getCommentsForPost mock')
        return [{
            content: 'Cool1'
        },
        {
            content: 'Cool2'
        }]
    }
}))

describe('Mock test', () => {
    it('should do mock', async () => {
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
    })


})