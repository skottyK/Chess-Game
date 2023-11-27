<template>
  <!-- Settings page that allows user to adjust the settings of the chess game being played -->
  <div class="settings-container">
      <!-- This is a box that contains all the settings features -->
      <div class="settings-box">
      <h1>Chess Game Settings</h1>
      <!-- Form for chess game settings -->
      <form @submit.prevent="updateSettings">
          <!-- Player Settings Selection -->
          <label for="playerSettings">Player Settings:</label>
          <select id="playerSettings" v-model="settings.playerSettings" class="input-field">
              <option value="singlePlayer">Single Player</option>
              <option value="multiplayer">Multiplayer (Partner Pass and play)</option>
          </select>
          <!-- Timer Selection -->
          <label for="timer">Timer (in minutes):</label>
          <input type="number" id="timer" v-model="settings.timer" min="1" max="60" class="input-field">
          <!-- Difficulty Level Selection -->
          <label for="difficulty">Difficulty Level:</label>
          <select id="difficulty" v-model="settings.difficulty" class="input-field">
              <option value="easy">Easy (Beginner)</option>
              <option value="medium">Medium (Intermediate)</option>
              <option value="hard">Hard (Advanced)</option>
          </select>
          <!-- Update Settings Button -->
          <button type="submit" class="sign-up-btn">Update Settings</button>
      </form>
      </div>
  </div>
</template>

<script>
/*
  * The GameSettings component is the settings page of the application,
  * containing options to change the settings of the chess game.
  * @component
*/
import axios from 'axios';

export default {
  name: 'GameSettings',
  data () {
    // this is the default settings for the chess game
    return {
      settings: {
        playerSettings: 'multiplayer',
        timer: 15,
        difficulty: 'medium'
      },
      loading: false,
      error: null
    }
  },
  // this is to fetch the data from the api
  mounted() {
    this.loading = true;
    axios.get('http://localhost:8080/api/settings') // Replace with your API endpoint
      // get settings response from the api
      .then(response => {
        this.settings = response.data;
      })
      // if there is an error, display the error
      .catch(error => {
        this.error = error;
        console.error("Error fetching settings:", error);
      })
      // once the data is loaded, set loading to false
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    // method to 
    updateSettings() {
      this.loading = true;
      axios.post('http://localhost:8080/api/settings', this.settings) // Replace with your API endpoint
        .then(() => {
          alert('Settings updated successfully!');
        })
        .catch(error => {
          this.error = error;
          console.error("Error updating settings:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>

<style scoped>
/* Styles for the settings page */
.settings-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #4f13be; /* Matched with AppSignIn.vue */
}
/* Styles for the settings box */
.settings-box {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Matched with AppSignIn.vue */
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* Styles for each of the input boxes in the settings menu */
.input-field {
  width: 100%;
  font-size: large;
  padding: 15px;
  margin: 15px 0;
  border: 2px solid #dddddd; /* Matched with AppSignIn.vue */
  border-radius: 8px;
  transition: border-color 0.3s;
}
.input-field:focus {
  border-color: #a4a4ff; /* Matched with AppSignIn.vue */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
/* Styles for the update settings button */
.sign-up-btn {
  background: #7732f7; /* Matched with AppSignIn.vue */
  color: #ffffff;
  border: 2px solid #240361; /* Matched with AppSignIn.vue */
  padding: 5px;
  margin: 15px 0;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.sign-up-btn:hover {
  background-color: #4f13be; /* Matched with AppSignIn.vue */
  color: #ffffff;
}
.settings-box h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4f13be;
  font-size: 2 rem;
  margin-top: 5px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
/* Styles for the labels in the settings menu */
label {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4f13be;
  font-size: 1.5rem;
  margin-bottom: 15px;
  padding: 5px;
}
/* Styles for the timer select input box in the settings menu */
input[type="number"] {
  width: 100%;
  padding: 15px;
  margin: 8px 0;
  border: 2px solid #dddddd; /* Matched with AppSignIn.vue */
  box-sizing: border-box; /* This ensures padding is included in the width */
  padding: 15px; /* Match padding of select elements */
  border-radius: 4px;
  transition: all 0.3s;
  margin-top: 0.5rem; /* Align top margin with labels */
}
</style>
