<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const email = ref('')
const form = ref(null)
const reCaptchaSiteKey = '6LdJbBMqAAAAADQdzuxd6NktdKhqlYRpOF-XGOrG'

const loadReCaptchaScript = () => {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha && window.grecaptcha.execute) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaSiteKey}`
      script.onload = () => resolve()
      script.onerror = (error) => reject(error)
      document.head.appendChild(script)
    }
  })
}

const isValidEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const sendEmail = async () => {
  try {
    // verify human
    await loadReCaptchaScript()
    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(reCaptchaSiteKey, { action: 'submit' })
      const hiddenInput = document.createElement('input')
      hiddenInput.type = 'hidden'
      hiddenInput.name = 'g-recaptcha-response'
      hiddenInput.value = token
      form.value.appendChild(hiddenInput)
      // verify email format
      isValidEmailFormat(email.value)

      emailjs
        .sendForm(
          import.meta.env.VITE_VUE_APP_SERVICE_ID,
          import.meta.env.VITE_VUE_APP_TEMPLATE_ID,
          form.value,
          import.meta.env.VITE_VUE_APP_PUBLIC_KEY
        )
        .then(
          () => {
            alert('Your email has been sent. I will get back to you as soon as possible.')
            form.value.reset()
          },
          (error) => {
            alert('FAILED...', error.text)
            form.value.reset()
          }
        )
    })
  } catch (error) {
    console.error('Failed to load reCAPTCHA:', error)
  }
}
</script>

<template>
  <div class="send-email">
    <h1>Send me an email</h1>
    <form @submit.prevent="sendEmail" ref="form">
      <label for="from_name">Your Name</label>
      <input type="text" id="from_name" name="from_name" required />

      <label for="from_email">Your Email</label>
      <input type="email" id="from_email" name="from_email" required />

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
  width: 100%;
  margin-bottom: 10px;
}

form textarea {
  height: 30vh;
}

form button {
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

form button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
