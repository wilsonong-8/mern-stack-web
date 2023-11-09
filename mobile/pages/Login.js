import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { useAppContext } from "../context/appContext";
import { useState } from "react";

const Login = () => {
  const {loginUser}=useAppContext()
  const [isAuthenticating, setIsAuthenticating] = useState(false);


  const loginHandler = async ({email,password}) => {
    setIsAuthenticating(true);
    const currentUser = {email,password}
    await loginUser(currentUser)
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default Login;