import { useState } from "react";

const samplePosts = [
  {
    id: 1,
    author: "Nguyễn Văn A",
    content: "Hôm nay trời đẹp quá!",
    time: "2 giờ trước",
  },
  {
    id: 2,
    author: "Nguyễn Văn A",
    content: "Viết thử một post có like share comment nè.",
    time: "1 ngày trước",
  },
];

const PostList = () => {
  return (
    <div className="post-list">
      {samplePosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments] = useState([]);
  const [shared, setShared] = useState(0);

  return (
    <div className="post" style={styles.post}>
      <h4>{post.author}</h4>
      <p>{post.content}</p>
      <small>{post.time}</small>
      <div style={styles.actions}>
        <button onClick={() => setLikes(likes + 1)}>👍 Like ({likes})</button>
        <button>💬 Comment</button>
        <button onClick={() => setShared(shared + 1)}>↪️ Share ({shared})</button>
      </div>
    </div>
  );
};

const styles = {
  post: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "12px",
  },
  actions: {
    marginTop: "8px",
    display: "flex",
    gap: "12px",
  },
};

export default PostList;
