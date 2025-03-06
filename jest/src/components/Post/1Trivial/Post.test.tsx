import { render, screen, within,  } from "@testing-library/react"
import { Post } from "./Post";

describe('Post test suite - trivial tests', ()=>{
    it('should be rendered in the document - no likes', ()=>{
        const someUserName = 'Alex';
        const someContent = 'Some content'
        render(<Post
            user={someUserName}
            content={someContent}
        ></Post>)

        screen.debug() // visualize what is on the screen inside the console

        const postContainer = screen.getByTestId('post-container')
        expect(postContainer).toBeInTheDocument();

        const user = screen.getByRole('heading')
        expect(user).toBeInTheDocument();
        expect(user).toHaveTextContent(someUserName)

        const postContent = screen.getByRole('paragraph')
        expect(postContent).toBeInTheDocument();
        expect(postContent).toHaveTextContent(someContent)

        //const likesList = screen.getByRole('list') // throws error of not found
        const likesList = screen.queryByRole('list')
        expect(likesList).not.toBeInTheDocument();
    })

    it('should be rendered in the document - with likes', ()=>{
        const someUserName = 'Alex';
        const someContent = 'Some content'
        const someLikesBy = ['Alex', 'Mary']
        render(<Post
            user={someUserName}
            content={someContent}
            likesBy={someLikesBy}
        ></Post>)

        screen.debug() // visualize what is on the screen inside the console

        const likesContainer = screen.getByTestId('likes-container');
        const likes = within(likesContainer).getAllByRole('listitem');
        expect(likes).toHaveLength(2);
        expect(likes[0]).toHaveTextContent('Alex')
        expect(likes[1]).toHaveTextContent('Mary')

    })
})