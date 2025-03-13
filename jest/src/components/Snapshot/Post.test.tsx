import { Post } from './Post'
import { render, } from "@testing-library/react"

describe('Post snapshot tests', ()=>{

    it('initial test', ()=>{
        const rendered = render(<Post
            content='Some Content'
            user='Some user'
        />)
        expect(rendered.asFragment()).toMatchSnapshot();
    })

    it('Second test', ()=>{
        const rendered = render(<Post
            content='Some Other Content'
            user='Some Other user'
        />)
        expect(rendered.asFragment()).toMatchSnapshot();
    })

})