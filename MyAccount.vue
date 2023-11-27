<template>
  <!-- This is the My account component that displays your account info and game data -->
  <div class="my-account">
    <!-- Title of page -->
    <h1>My Account</h1>
    <!-- Check if data is loading -->
    <div v-if="loading">Loading account details...</div>
    <!-- Display account details if not loading and no error -->
    <div class="account-details" v-if="!loading && !error">
      <!-- Account details go here. Replace with actual data bindings. -->
      <p><strong>Username:</strong> {{ accountData.username }}</p>
      <p><strong>Email:</strong> {{ accountData.email }}</p>
      <!-- Add more account details as needed -->
    </div>
    <!-- Display error message -->
    <div v-if="error">Error loading account: {{ error.message }}</div>
    <div class="account-actions">
      <!-- Add actions like editing account, changing password, etc. -->
      <button @click="goToLeaderboard">View Leaderboard</button>
    </div>
  </div>
</template>
<script>
/*
  * The MyAccount component is the my account page of the application,
  * containing options to view your account details and game data.
  * @component
*/
import axios from 'axios';

export default {
  name: 'MyAccount',
  data() {
    return {
      accountData: {},
      loading: false,
      error: null
    };
  },
  mounted() {
    this.fetchAccountData();
  },
  methods: {
    fetchAccountData() {
      this.loading = true;
      axios.get('http://localhost:8080/api/account') // Replace with your API endpoint
        .then(response => {
          this.accountData = response.data;
        })
        .catch(error => {
          this.error = error;
          console.error("Error fetching account data:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goToLeaderboard() {
      this.$router.push('/LeaderBoard')
    }
  }
}
</script>

<style scoped>
/* CSS Styles for the my account page */
  .my-account {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  /* Styles for the account details section */
  .account-details {
    margin-bottom: 20px;
  }
  /* style for the buttons */
  button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2980b9;
  }
  </style>
