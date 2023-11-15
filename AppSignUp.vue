<template>
  <!-- This is the app sign up page that is shown when the user selects Sign Up/ Log in -->
    <div class="sign-up-container">
      <div class="sign-up-box">
        <!-- This is the title section -->
        <h1>Join The Rookies!</h1>
        <h2>Sign up here for an account:</h2>
        <!-- Username input -->
        <input type="text" placeholder="Username" class="input-field">

        <!-- Email input -->
        <input type="email" placeholder="Email" class="input-field">

        <!-- Password input -->
        <input type="password" placeholder="Password" class="input-field">

        <!-- Confirm password input -->
        <input type="password" placeholder="Confirm Password" class="input-field">

        <!-- Regular sign up button -->
        <button class="sign-up-btn">Sign Up</button>

        <!-- Or use Google SSO -->
        <p>Or use your Google account:</p>
        <!-- Add this for Google Sign In -->
        <button type="button" class="google-sign-in-button">
          Sign in with Google
        </button>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    </div>
  </template>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
// JAVASCRIPT START HERE: - implement later on all files
/*
  * The AppSignUp component is the sign up page of the application,
  * containing options to sign up for an account.
  * @component
*/
export default {
  name: 'AppSignUp',
  methods: {
  onSignIn(googleUser) {
    const idToken = googleUser.getAuthResponse().idToken;
    // TODO: Send the ID token to your backend server
    console.log(idToken);
  },
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    });
  }
}

}
</script>

<style scoped>
/* CSS Styles for the sign up page */
  .sign-up-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #4f13be; /* Using the primary color from the landing page */
  }
  /* Styles for the sign up box */
  .sign-up-box {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Shadow similar to the button on landing page */
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* Styles for each of the input boxes in the sign up menu */
  .input-field {
    width: 100%;
    padding: 15px;
    margin: 8px 0;
    border: 2px solid #dddddd; /* Light border color for an elegant look */
    border-radius: 8px; /* Rounded corners like the button on the landing page */
    transition: border-color 0.3s;
  }
  /* Styles for the input boxes when they are focused */
  .input-field:focus {
    border-color: #a4a4ff; /* Lighter blue for focus */
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); /* Soft inset shadow for depth */
  }
  /* Styles for the sign up button */
  .sign-up-btn {
    background: #7732f7; /* White background like the landing page button */
    color: #ffffff; /* Color to match the landing page button text */
    border: 2px solid #240361; /* Border to match the text color */
    padding: 10px;
    margin: 15px 0;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 8px; /* Consistent with button on the landing page */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Consistent font family */
  }
  .sign-up-btn:hover {
    background-color: #4f13be; /* Hover effect like the landing page button */
    color: #ffffff;
  }
  /* Styles for the title and subtitle */
  .sign-up-box h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Consistent font family */
    color: #4f13be; /* This color is from your theme, but feel free to adjust. */
    font-size: 2.5rem; /* Increasing the size for impact. */
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow for depth. */
  }
  .sign-up-box h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Consistent font family */
    color: #000000; /* This color is from your theme, but feel free to adjust. */
    font-size: 1 rem; /* Increasing the size for impact. */
    margin-bottom: 20px;
  }
  /* Styles for the Google sign in title and button */
  .sign-up-box p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Consistent font family */
    color: #4f13be; /* This color is from your theme, but feel free to adjust. */
    font-size: 2 rem; /* Increasing the size for impact. */
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow for depth. */
  }
  .g-signin2 {
    margin-top: 20px; /* Spacing for the Google sign-in button */
  }
  .google-sign-in-button {
    background-color: #dbd9e0; /* Google brand color */
    color: rgb(0, 0, 0);
    padding: 10px 15px;
    border: none;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  .google-sign-in-button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
</style>
