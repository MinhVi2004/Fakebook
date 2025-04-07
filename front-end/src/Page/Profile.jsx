import React, { useState } from "react";
import EditProfileForm from "./EditProfileForm"; // Import form chỉnh sửa
import "../CSS/Profile.css";
function Profile() {
  // Trạng thái cho thông tin người dùng
  const [userName, setUserName] = useState("Đình Thái");
  const [profilePic, setProfilePic] = useState("/Images/2.jpg");
  const [coverPic, setCoverPic] = useState("/Images/1.jpg");
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  // Xử lý mở/đóng form chỉnh sửa
  const showEditForm = () => setIsEditFormOpen(true);
  const hideEditForm = () => setIsEditFormOpen(false);

  // Xử lý cập nhật thông tin từ form
  const updateProfile = (updatedData) => {
    // Cập nhật tên người dùng
    if (updatedData.userName) setUserName(updatedData.userName);

    // Cập nhật ảnh đại diện
    if (updatedData.profilePic && updatedData.profilePic.size > 0) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target.result);
      reader.readAsDataURL(updatedData.profilePic);
    }

    // Cập nhật ảnh bìa
    if (updatedData.coverPic && updatedData.coverPic.size > 0) {
      const reader = new FileReader();
      reader.onload = (e) => setCoverPic(e.target.result);
      reader.readAsDataURL(updatedData.coverPic);
    }

    // Đóng form sau khi lưu
    hideEditForm();
  };

  return (
    <div className="profile-container">
      <div className="max-w-6xl mx-auto">
        {/* Phần ảnh bìa */}
        <div className="cover-photo">
          <img src={coverPic} alt="Ảnh bìa" />
          <button>📷 Thêm ảnh bìa</button>
        </div>
        {/* Phần thông tin cá nhân */}
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={profilePic} alt="Ảnh đại diện" />
          </div>
          <div className="profile-name">
            <h1>{userName}</h1>
            <p>1.2K người bạn</p>
          </div>
          <div className="profile-buttons">
            <button onClick={showEditForm}>✏️ Chỉnh sửa trang cá nhân</button>
          </div>
          {isEditFormOpen && (
            <EditProfileForm
              userName={userName}
              onSave={(updatedData) => {
                updateProfile(updatedData); // Cập nhật thông tin
              }}
              onCancel={hideEditForm} // Đóng form khi nhấn "Hủy"
            />
          )}
        </div>
        {/* //////////////////////*/}
        <div className="profile-tabs">
          <div className="tab-buttons">
            <button className="active">Dòng thời gian</button>
            <button className="inactive">Giới thiệu</button>
            <button className="inactive">Bạn bè</button>
            <button className="inactive">Ảnh</button>
          </div>
        </div>

        {/* Phần bài viết */}
        <div className="post-container">
          <div className="post-input">
            <div className="post-input-header">
              <img src={profilePic} alt="Ảnh đại diện" />
              <input type="text" placeholder="Bạn đang nghĩ gì?" />
            </div>
            <div className="post-options">
              <button>📷 Thêm ảnh</button>
              <button>🎥 Thêm video</button>
              <button>📍 Địa điểm</button>
            </div>
          </div>

          <div className="post-content">
            <div className="post-header">
              <img src={profilePic} alt="Ảnh đại diện" />
              <div className="post-header-info">
                <h3>{userName}</h3>
                <p>2 giờ trước</p>
              </div>
            </div>
            <p>Hihihi</p>
            <img src="/Images/8.jpg" alt="Ảnh bài viết" className="picture" />
            <div className="post-actions">
              <button>Thích </button>
              <button>Bình luận</button>
              <button>Chia sẻ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
