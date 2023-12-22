<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>DANSOS || LOGIN</title>

    @vite('resources/css/app.css')

    <!-- <script src="https://apis.google.com/js/platform.js" async defer></script> -->
    <script src="https://accounts.google.com/gsi/client"></script>

    <script>
        function handleCredentialResponse(response) {
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
                        window.location.replace('http://localhost:8080/ProjekCI_DanaSos/index.php/welcome');
                    }
                })
        }
    </script>


</head>

<body>
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
</body>

</html>
