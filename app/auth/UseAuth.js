import { useContext } from "react";
import authStorage from "./Storage";
import AuthContext from "./Context";
import jwtDecode from "jwt-decode";

export default UseAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    console.log("comming in login");
    const user = jwtDecode(authToken);
    console.log("token======>", user);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, logIn, logOut };
};
