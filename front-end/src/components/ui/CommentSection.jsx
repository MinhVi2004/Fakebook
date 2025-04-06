import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState(["Hay quá!", "Tuyệt vời"]);
  const [newComment, setNewComment] = useState("");

  const handleComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {comments.map((c, i) => (
        <p key={i}>💬 {c}</p>
      ))}
      <input
        type="text"
        placeholder="Viết bình luận..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleComment}>Gửi</button>
    </div>
  );
};

export default CommentSection;
