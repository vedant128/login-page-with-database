function handleCredentialResponse(response) {
    // Decode JWT token to get email
    const data = JSON.parse(atob(response.credential.split(".")[1]));
    document.getElementById("email").value = data.email;
  }

  function initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: "974463387535-312gfigieh31f6cq9akau8a0dhuguuvf.apps.googleusercontent.com", // Replace with your actual Google Client ID
      callback: handleCredentialResponse,
    });

    // Attach click event to button
    document
      .querySelector('.google-signin')  // or use getElementById if needed
      .addEventListener("click", function () {
        google.accounts.id.prompt(); // Shows the Google sign-in dialog
        
      });
  }