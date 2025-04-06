import ProfileHeader from "../components/ui/profile/ProfileHeader";
import ProfileTabs from "../components/ui/profile/ProfileTabs";
import PostList from "../components/ui/profile/PostList";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileTabs />
      <PostList />
    </div>
  );
};

export default Profile;
