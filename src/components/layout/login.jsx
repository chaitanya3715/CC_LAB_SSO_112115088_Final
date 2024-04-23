import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return<>
  <center>
  <p style={{width:'100vw',height:'40vh',fontSize:'40px'}}>Login to access the contact manager</p>
   <button onClick={() => loginWithRedirect()}>Log In</button>
   </center>
   </>
};

export default LoginButton;