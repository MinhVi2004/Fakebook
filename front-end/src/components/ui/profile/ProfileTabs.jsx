import { useState } from "react";
import PostList from "./PostList";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button onClick={() => setActiveTab("posts")}>Bài viết</button>
        <button onClick={() => setActiveTab("about")}>Giới thiệu</button>
        <button onClick={() => setActiveTab("friends")}>Bạn bè</button>
      </div>

      <div className="tab-content">
        {activeTab === "posts" && <PostList />}
        {activeTab === "about" && (
          <div>
            <h3>Giới thiệu</h3>
            <p>Tên: Nguyễn Văn A</p>
            <p>Ngày sinh: 01/01/2000</p>
            <p>Sở thích: Lập trình, bóng đá</p>
          </div>
        )}
        {activeTab === "friends" && (
          <div>
            <h3>Bạn bè</h3>
            <p>Hiển thị danh sách bạn bè ở đây...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
