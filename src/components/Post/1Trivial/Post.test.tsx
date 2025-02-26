import { render, screen,  } from "@testing-library/react"
import { Post } from "./Post";

describe('Post test suite - trivial tests', ()=>{
    it('should be rendered in the document', ()=>{
        const someUserName = 'Alex';
        const someContent = 'Some content'
        render(<Post
            user={someUserName}
            content={someContent}
        ></Post>)

        const postContainer = screen.getByTestId('post-container')
        expect(postContainer).toBeInTheDocument();

        const user = screen.getByRole('heading')
        expect(user).toBeInTheDocument();
        expect(user).toHaveTextContent(someUserName)

        const postContent = screen.getByRole('paragraph')
        expect(postContent).toBeInTheDocument();
        expect(postContent).toHaveTextContent(someContent)
    })
})