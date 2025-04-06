import '../../../CSS/ProfileHeader.css'; // hoặc dùng tailwind

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="cover-photo">
        <img src="https://via.placeholder.com/900x300" alt="Cover" />
      </div>
      <div className="profile-info">
        <img
          className="avatar"
          src="https://via.placeholder.com/150"
          alt="Avatar"
        />
        <h2>Nguyễn Văn A</h2>
        <p>Software Developer • Hà Nội</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
