<template>
  <!-- Root container for the About Us Page -->
    <div class="about-us">
      <!-- Page Title -->
      <h1>About Us</h1>
      <!-- Container for developer profiles -->
      <div class="developer-container">
        <!-- Developer profile loop -->
        <div v-for="(developer, index) in developers" :key="index" class="developer">
          <h2>{{ developer.name }}</h2>
          <img :src="developer.image" :alt="`Photo of ${developer.name}`" class="developer-photo"/>
          <p>{{ developer.role }}</p>
          <p>{{ developer.bio }}</p>
        </div>
      </div>
    </div>
  </template>

<script>
/**
 * The AboutUs component is responsible for displaying information about the development team.
 * It lists the developers with their name, role, and bio.
 * @component
 */
export default {
  name: 'AboutUs',
  /**
   * The data function returns the component's reactive data.
   * @returns {Object} The data object containing the developers array.
   */
  data () {
    return {
      // Array of developer objects
      developers: [
        // each object in this array represents a developer with their name, role, bio, and image
        {
          name: 'Kailee Skotty',
          role: 'Frontend Developer',
          bio: 'Senior at the University of Wisconsin - Madison studying Computer Science and Electrical Engineering.',
          image: 'putImgHere.png'
        },
        {
          name: 'Izzy Bogot',
          role: 'Frontend Developer',
          bio: 'A brief bio of Developer 2...',
          image: 'path-to-developer2-image.jpg'
        },
        {
          name: 'Tyler',
          role: 'Frontend Developer',
          bio: 'Bio of Developer 3...',
          image: 'KaileeImg.png'
        },
        {
          name: 'Alan',
          role: 'Backend Developer',
          bio: 'Bio of Developer 4...',
          image: 'KaileeImg.png'
        },
        {
          name: 'Joe',
          role: 'Database Managment Developer',
          bio: 'Bio of Developer 5...',
          image: 'KaileeImg.png'
        },
        {
          name: 'Eli',
          role: 'Backend Developer',
          bio: 'Bio of Developer 6...',
          image: 'KaileeImg.png'
        }
      ]
    }
  }
}
</script>

  <style>
  /* Add your styles here  */
  .about-us {
    text-align: center;
    padding: 50px;
  }
  /* style for developer profile container */
  .developer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  /* style for developer profile */
  .developer {
    width: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  /* style for developer profile image */
  .developer-photo {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  </style>
