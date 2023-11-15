<template>
  <!-- This is the leaderboard section - considerable work still to be done -->
    <div class="LeaderBoard">
      <!-- Title of the leaderboard -->
      <h1>Chess Games Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <!-- This is the components of the leaderboard -->
            <th>Rank</th>
            <th>Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
          </tr>
        </thead>
        <tbody>
          <!-- This is the data that will be displayed in the leaderboard -->
          <!-- Loop through to display each data for evrey player -->
          <tr v-for="(entry, index) in leaderboardData" :key="entry.player">
            <td>{{ index + 1 }}</td>
            <td>{{ entry.player }}</td>
            <td>{{ entry.wins }}</td>
            <td>{{ entry.losses }}</td>
            <td>{{ entry.draws }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
/*
  * The LeaderBoard component is the leaderboard page of the application,
  * containing options to view the leaderboard and its corresponding data for each player.
  * @component
*/
export default {
  name: 'LeaderBoard',
  data () {
    return {
      // This data would typically come from an API call
      // TODO: implement this from database
      leaderboardData: [
        { player: 'Player1', wins: 20, losses: 5, draws: 3 },
        { player: 'Player2', wins: 18, losses: 7, draws: 1 }
        // ... more players
      ]
    }
  }
}
</script>
  <style scoped>
  /* Styles for the leaderboard page */
  .LeaderBoard {
    max-width: 600px;
    margin: 2rem auto; /* Increased top margin */
    padding: 1rem;
  }
  /* Styles for the leaderboard table */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  /* Styles for the leaderboard table header */
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f4f4f4;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
</style>
