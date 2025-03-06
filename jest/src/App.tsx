import { Post } from './components/Post/1Trivial/Post'

function App() {

  return (
    <>
      <Post
        content='The sun is bright'
        user='Alex'
        likesBy={['Mary', 'John']}
      />
    </>
  )
}

export default App
