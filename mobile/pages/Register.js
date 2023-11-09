import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

const Register = () => {
  const {registerUser} = useAppContext();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({name,email,number,password}) => {
    setIsAuthenticating(true);
    const currentUser = {name,email,number,password}
    await registerUser(currentUser);
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating New User.."/>
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default Register;