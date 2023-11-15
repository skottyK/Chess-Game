<template>
  <!-- This is the page that pops up when a user selects contact us from the footer page. -->
  <!-- It is a little page that allows the user to email us any comments or questions -->
    <div class="contact-page">
      <!-- Title -->
      <h1>Contact Us</h1>
        <p>Have a question or comment? Send us a message!</p>
        <!-- Submit the form - need to make sure this works and sends email - some js work to be done -->
      <form @submit.prevent="submitForm" class="contact-form">
        <!-- Name Input box -->
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="contact.name" required>
        </div>
        <!-- Email input box -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="contact.email" required>
        </div>
        <!-- Message Input box -->
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="contact.message" required></textarea>
        </div>
        <!-- Submit button -->
        <button type="submit">Send</button>
      </form>
    </div>
  </template>

<script>
/*
  * The ContactPage component is the contact us page of the application,
  * containing options to send a message to the developers.
  * @component
*/
export default {
  name: 'ContactPage',
  // Default data for the contact us page. - Empty
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    // Submits the form and sends the message to the developers vis email.
    submitForm () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contact)
      }
      // Replace /api/contact with your endpoint where your server is setup to recieve POST requests from the form.
      fetch('/api/contact', requestOptions)
        .then(response => response.json())
        .then(data => {
          // Handle response data
          console.log(data)
          alert('Thank you for your message!')
          this.resetForm()
        })
        .catch(error => {
          // Handle any errors
          console.error('There was an error!', error)
        })
    },
    // Resets the form after the message is sent.
    resetForm () {
      this.contact.name = ''
      this.contact.email = ''
      this.contact.message = ''
    }
  }

}
</script>
  <style scoped>
  /* Styles for the contact us page */
  .contact-page {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
  }
  /* Styles for the contact form */
  .form-group {
    margin-bottom: 1rem;
  }
  /* Styles for the labels and input boxes */
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form-group textarea {
    resize: vertical; /* Allow only vertical resizing */
  }
  /* Styles for the submit button */
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
