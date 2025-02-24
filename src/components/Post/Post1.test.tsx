import { render, screen } from "@testing-library/react"
import { Post1 } from "./Post1"


describe('Post 1 test suite', ()=>{
    it('should be rendered in the document', ()=>{
        render(<Post1
            user="Alex"
            content="Some content"
        ></Post1>)

        const postContainer = screen.getByTestId('post-container')
        expect(postContainer).toBeInTheDocument();
    })
})