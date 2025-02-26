// import { Post1 } from "./components/Post/1Trivial/Post1"
//import { Post2 } from "./components/Post/2Dynamic/Post2"

import { Post } from "./components/Post/3Mocks/1simple/Post"



function App() {

  return (
    <>     
      <Post
        user="Alex"
        content="Is is a sunny day in the neighborhood"
        id="123"
      ></Post>
    </>
  )
}

export default App
