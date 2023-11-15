<template>
    <header>
      <!-- Header component to display at the top of the page -->
      <nav class="nav-container">
        <!-- This is kind of like a Navigational Pane. Helps to Navigate around -->
        <!-- each of these represents a navigational tool within the website -->
        <button @click="navigateTo('/')" class="nav-link">Home</button>
        <button @click="navigateTo('/AppSettings')" class="nav-link">Settings</button>
        <button @click="navigateTo('/AppSignUp')" class="nav-link">Sign Up/Log In</button>
        <button @click="navigateTo('/AboutUs')" class="nav-link">About Us</button>
        <button @click="navigateTo('/MyAccount')" class="nav-link">My Account</button>

      </nav>
    </header>
  </template>
<script>
/*
  * The AppHeader component is the header section of the application,
  * containing navigation links to the various pages.
  * @component
*/
export default {
  name: 'AppHeader',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

  <style scoped>
  /* Style of the header itself  */
  header {
    background-color: #322d41; /* A deeper shade of purple for contrast */
    color: #ffffff; /* White text for better readability */
    padding: 1rem; /* Add some space inside the header */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Aesthetic font */
    text-align: center;
    position: fixed; /* Keep the header at the top of the page */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  /* Style of the navigation links */
  .nav-container {
    display: flex;
    justify-content: space-around; /* This will space out the items evenly */
    align-items: center;
    width: 100%;
    background-color: #322d41;
  }
  .nav-link {
    background: none;
    border: none;   /* Removes the border */
    font-size: larger;
    padding: 0.5rem 1rem;   /* Gives a little space around each link */
    /* transition: background-color 0.3s;   SmoothS color transition */
    color: #ffffff; /* Ensure nav links are also white for consistency */
    text-decoration: none; /* No underline */
    padding: 0.5rem; /* Spacing around nav links */
    transition: color 0.3s ease-in-out; /* Smooth transition for hover effect */
  }
  .nav-link:hover {
    background-color: rgba(30, 16, 94, 0.582); /* Adds a hover effect */
    padding: 1 rem; /* Spacing around nav links */
  }
  </style>
