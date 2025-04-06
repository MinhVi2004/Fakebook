import React from 'react'
import Post from "../components/ui/Post";
import posts from "../data/DummyPost";
const Home = () => {
  return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Home
