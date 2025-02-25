import { render, screen } from "@testing-library/react"
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
    })
})