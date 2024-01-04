import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "../axios.js";
import axiosClient from "../axios.js";



export default function Login() {
  const { userToken } = useStateContext();
  const { setCurrentUser, setUserToken } = useStateContext();
  const [error, setError] = useState({ __html: "" });


  if (userToken) {
    return <Navigate to='/' />
  }

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setEmail(res.data.email);


          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  if (email) {
    axiosClient
      .post("/login", {
        email,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          setError({ __html: finalErrors.join("<br>") });
        }
        console.error(error);
      });
  }

  return <>
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 italic text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">DANA-SOS</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:max-w-sm">
        <div className="px-6 sm:px-0 max-w-sm">
          <button onClick={login} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
        </div>
      </div>
    </div>
  </>;
}
