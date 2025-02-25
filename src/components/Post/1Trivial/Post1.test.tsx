import { render, screen,  } from "@testing-library/react"
import { Post1 } from "./Post1";



describe.skip('Post 1 test suite - trivial tests', ()=>{
    it('should be rendered in the document', ()=>{
        const someUserName = 'Alex';
        const someContent = 'Some content'
        render(<Post1
            user={someUserName}
            content={someContent}
        ></Post1>)

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