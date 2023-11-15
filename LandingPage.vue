<template>
  <!-- The main landing container with clearly named child components -->
  <div class="landing">
    <!-- This is the large center button that begins the chess Game -->
    <button @click="navigateTo('/ChessBoard')" class="nav-link-homePage">Play Chess</button>
    <!-- This is the view leaderboard button -->
    <button @click="navigateTo('/LeaderBoard')" class="nav-link-LeaderBoard">View Leaderboard</button>
  </div>
</template>

<script>
/*
  * The LandingPage component is the landing page of the application,
  * containing options to play the chess game or view the leaderboard.
  * @component
*/
export default {
  name: 'LandingPage',
  methods: {
    // Navigates to the specified route.
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
/* Created a css section that adheres to the CSS Style Standards Document*/
/* Styles for the landing page */
.landing {
  display: flex;
  align-items: center;
  justify-content: center; /* Center button horizontally and vertically */
  height: calc(100vh - 50px); /* Subtracting the footer height if it's 50px */
  background: url('RookiesLogo.jpg') no-repeat center center; /* Your logo as the background */
  background-size: cover; /* Cover the entire viewport */
  position: relative; /* Set relative for positioning children absolutely */
  padding-bottom: 300px; /* Add some padding to the bottom of the container */
  flex-direction: column; /* Align children vertically */
}
/* Styles for the large center button */
.nav-link-homePage{
  background: #ffffff; /* Change this to the desired button color */
  color: #4f13be; /* Change this to the desired text color */
  border: none;
  font-size: 4rem;
  padding: 2rem 4rem;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
  border-radius: 8px; /* Rounded corners */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transitions for hover effects */
}
/* Styles for the view leaderboard button */
.nav-link-LeaderBoard {
  background: #ffffff; /* Change this to the desired button color */
  color: #4f13be; /* Change this to the desired text color */
  border: none;
  font-size: 2rem;
  padding: 1rem 4rem; /* Adjust padding as needed */
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
  border-radius: 8px; /* Rounded corners */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transitions for hover effects */
  margin-bottom: 200px;
  margin-top: 90px; /* Adjust this value to move the button down below the 'Rookies' text */
}
.nav-link-homePage:hover {
  background-color: #4f13be; /* Color when the mouse hovers over the button */
  color: #ffffff; /* Text color on hover */
  border-color: #ffffff; /* Border color on hover */
}
.nav-link-LeaderBoard:hover {
  background-color: #4f13be; /* Color when the mouse hovers over the button */
  color: #ffffff; /* Text color on hover */
  border-color: #ffffff; /* Border color on hover */
}

/* Styles for the navigational links */
.nav-link:focus, .nav-link:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
