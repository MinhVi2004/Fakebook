import { Link } from "react-router-dom";
import { useState } from "react";
import CommentSection from "./CommentSection";
import "../../CSS/Post.css";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post-card">
      <div className="post-header">
        <Link to={`/profile/${post.user.id}`} className="post-author">
          {post.user.name}
        </Link>
        <span className="post-time">{post.time}</span>
      </div>
      <p className="post-caption">{post.caption}</p>
      {post.image && <img src={post.image} className="post-image" alt="" />}
      {post.video && (
        <video controls className="post-video">
          <source src={post.video} type="video/mp4" />
        </video>
      )}

      <div className="post-actions">
        <button onClick={() => setLikes(likes + 1)}>👍 Like ({likes})</button>
        <button onClick={() => setShowComments(!showComments)}>💬 Comment</button>
        <button>↪️ Share</button>
      </div>

      {showComments && <CommentSection />}
    </div>
  );
};

export default Post;
