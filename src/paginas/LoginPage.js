import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginPage = () => {
    const { loginWithRedirect } =useAuth0();
   
    return <button onClick={() => loginWithRedirect()} style={{minWidth: "100px"}}>Sign up</button>
      
}

export default LoginPage;

