<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="send-email">
    <h1>Send me an email</h1>
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
form input,
form textarea,
form button {
  display: block;
  width: 100%; /* Makes each element take up the full width */
  margin-bottom: 10px; /* Adds some space between the elements */
}

form textarea {
  height: 30vh;
}

form button {
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
  padding: 10px 15px; /* Padding for size */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  font-size: 1rem; /* Font size */
  cursor: pointer; /* Mouse cursor on hover */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s; /* Smooth background color transition on hover */
}

form button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
