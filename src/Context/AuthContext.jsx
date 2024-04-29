import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userdata, setuserdata] = useState("");

  //getting logged in or not
  const isLoggedin = !!token;
  console.log(isLoggedin);

  // storing token in lS
  const setTokeninLS = (Servertoken) => {
    setToken(Servertoken);
    return localStorage.setItem("token", Servertoken);
  };

  //tackeling the logout functionality
  const logoutUser = () => {
    setToken("");

    return localStorage.removeItem("token");
  };

  // getting userdetails

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://bcaguide.onrender.com/api/v1/user",
        {
          method: "GET",
          headers: {
            // Authorization: `Bear    er ${token}`,
            Authorization: token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const userData = await response.json();
      const { username, email, phone } = userData;
      console.log("need whole data", userData);
      setuserdata({ username, email, phone });
    } catch (error) {
      console.log("userfetch error", error);
    }
  };

  useEffect(() => {
    if (isLoggedin) fetchUser();
  }, [isLoggedin]);

  return (
    <AuthContext.Provider
      value={{
        setTokeninLS,
        isLoggedin,
        logoutUser,
        userdata,
        setuserdata,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
