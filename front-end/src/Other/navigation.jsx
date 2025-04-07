import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  return {
    goToSignin: () => navigate("/signin"),
    goToLogin: () => navigate("/login"),
    goToProfile: () => navigate("/profile"),
  };
};
