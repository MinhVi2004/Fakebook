// navigation.js
import { useNavigate } from "react-router-dom";
const useNavigation = () => {
     const navigate = useNavigate();

     const goToLogin = () => navigate("/login");
     const goToSignin = () => navigate("/signin");

     return { 
        goToLogin, 
        goToSignin
        };
};

export default useNavigation;
