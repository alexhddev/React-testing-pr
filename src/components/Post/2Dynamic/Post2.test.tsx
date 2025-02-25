import { render, screen, within } from "@testing-library/react"
import { Post2 } from "./Post2";
import userEvent from '@testing-library/user-event'




describe('Post 2 test suite', () => {
    it('should be rendered in the document', () => {
        const someUserName = 'Alex';
        const someContent = 'Some content'
        render(<Post2
            user={someUserName}
            content={someContent}
        ></Post2>)

        const postContainer = screen.getByTestId('post-container')
        expect(postContainer).toBeInTheDocument();

        const user = screen.getByRole('heading')
        expect(user).toBeInTheDocument();
        expect(user).toHaveTextContent(someUserName)

        const postContent = screen.getByRole('paragraph')
        expect(postContent).toBeInTheDocument();
        expect(postContent).toHaveTextContent(someContent)

        const commentContainer = screen.getByTestId('comment-container')
        expect(commentContainer).toBeInTheDocument();
    })

    describe('user interaction', () => {
        const someUserName = 'Alex';
        const someContent = 'Some content'
        beforeEach(() => {
            render(<Post2
                user={someUserName}
                content={someContent}
            ></Post2>)
        })

        test('User can comment', async () => {
            const user = userEvent.setup();
            const commentInput = screen.getByTestId('comment-input')
            const commentContent = 'You are awesome!'
            await user.type(commentInput, commentContent)
            expect(commentInput).toHaveValue(commentContent)
        })

        test('Comment area is cleared on click', async () => {
            const user = userEvent.setup();
            const commentInput = screen.getByTestId('comment-input')
            await user.type(commentInput, 'You are awesome!')

            const commentButton = screen.getByRole('button')
            await user.click(commentButton)

            expect(commentInput).toBeEmptyDOMElement();
        })

        test('Comment is added on screen', async () => {
            const user = userEvent.setup();
            const commentInput = screen.getByTestId('comment-input')
            await user.type(commentInput, 'You are awesome!')

            const commentButton = screen.getByRole('button')
            await user.click(commentButton)
            
            const commentsContainer = screen.getByTestId('post-comment-container')
            const comments = within(commentsContainer).getAllByRole('paragraph')
            expect(comments.length).toBe(1)
            expect(comments[0]).toHaveTextContent('You are awesome!')
        })

        test('Multiple comments are added on screen', async () => {
            const comment1 = 'You are awesome!'
            const comment2 = 'Nice car!'

            const user = userEvent.setup();
            const commentInput = screen.getByTestId('comment-input')
            const commentButton = screen.getByRole('button')

            await user.type(commentInput, comment1)
            await user.click(commentButton)

            await user.type(commentInput, comment2)
            await user.click(commentButton)
            
            const commentsContainer = screen.getByTestId('post-comment-container')
            const comments = within(commentsContainer).getAllByRole('paragraph')
            expect(comments.length).toBe(2)
            expect(comments[0]).toHaveTextContent(comment1)
            expect(comments[1]).toHaveTextContent(comment2)
        })
    })
})