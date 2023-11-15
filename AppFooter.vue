  <!-- components/Footer.vue -->
  <template>
    <!-- Footer component to display at the bottom of the page -->
    <footer>
      <!-- copyright text -->
      © 2023 The Rookies LLC
      <!-- Using RouterLink to navigate to the ContactPage route -->
      <a href="/ContactPage" class="nav-link-footer">Contact Us!</a>
    </footer>
  </template>
<script>
// import { RouterView } from 'vue-router'
/**
 * The AppFooter component is the footer section of the application,
 * containing copyright information and a link to the contact page.
 * @component
 */
export default {
  name: 'AppFooter'
  // removed componenets since routerview isnt used anymore
  // components: {  }
}
</script>

<style scoped>
  /* Your footer styles */
  footer {
    background-color: #322d41; /* Even darker shade for the footer */
    color: #c2c2c2; /* Soft white for text */
    padding: 1rem; /* Consistent padding with the header */
    font-size: 1.5 rem; /* Smaller font size for footer content */
    text-align: center; /* Center the text if it's a single line */
    position: sticky; /* Keep the footer at the bottom of the page */
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  /* styles for navigation link within the footer */
  .nav-link-footer {
    color: #f8f8f8; /* Slightly brighter color for links */
    padding: 0.5rem;
    margin-left: 10px;
    transition: color 0.3s ease-in-out; /* Smooth transition for hover effect */
    text-decoration: underline;
    cursor: pointer;
  }
  .nav-link:hover {
    color: #a8a8a8; /* Change for hover effect */
  }
</style>
