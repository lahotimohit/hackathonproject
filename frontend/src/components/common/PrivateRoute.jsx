import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import session from "../../atoms/Session";
import checkToken from "../../utils/checkToken";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import Navbar from "../common/Navbar";
const PrivateRoute = () => {
  const navigate = useNavigate();
  const setUserSession = useSetRecoilState(session);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getUserSession = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("auth-token");
      const userId = localStorage.getItem("user-id");

      if (!token || !userId) {
        return navigate("/signup");
      }

      try {
        const user = await checkToken(token, userId);
        if (!user) {
          navigate("/signup");
        }
        setUserSession((oldUser) => ({
          ...oldUser,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          role: user.role
        }));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserSession();
  }, [navigate, setUserSession]);

  if (isLoading) {
    <div className="h-screen w-full flex items-center justify-center">
      <Loader2 className="animate-spin w-20 h-20" />
    </div>;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
