import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";


export default function Login() {
  const { userToken } = useStateContext();

  if(userToken) {
    return <Navigate to='/'/>
  }


  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      console.log(script)
    }
  }, []);

  const handlehandleCredentialResponse = (response) => {
    fetch('index.php/auth/authenticate', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        request_type: 'user_auth',
        credential: response.credential
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status == 1) {
          window.location.replace('http://127.0.0.1:8000/login/auth');
        }
      })
  }
  return <>
    <div class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-5 italic text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">DANA-SOS</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:max-w-sm">
        <div class="px-6 sm:px-0 max-w-sm">
          <div id="g_id_onload"
            data-client_id="517766527052-11n8r7epj8tmmcbsnsi4s53d7ggikb5h.apps.googleusercontent.com"
            data-context="signin" data-ux_mode="popup" data-callback="handleCredentialResponse"
            data-auto_prompt="false">
          </div>

          <div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="filled_blue"
            data-text="continue_with" data-size="large" data-logo_alignment="left" data-width="300">
          </div>
        </div>
      </div>
    </div>
  </>;
}
