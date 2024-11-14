<script setup>
import WelcomeItem from './WelcomeItem.vue'
import SchoolIcon from './icons/IconSchool.vue'
import LinkedInIcon from './icons/IconLinkedIn.vue'
import SupportIcon from './icons/IconSupport.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SchoolIcon />
    </template>
    <template #heading>Portfolio</template>
    A <a href="https://lelyu.github.io/About-Me/" target="_blank" rel="noopener">collection</a> of
    my projects
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <LinkedInIcon />
    </template>
    <template #heading>Social Media</template
    ><a href="https://www.linkedin.com/in/lelyu/" target="_blank" rel="noopener">LinkedIn</a><br />

    <a href="https://github.com/lelyu" target="_blank" rel="noopener"><code>GitHub</code></a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Contact</template>
    <RouterLink to="/sendEmail">Send me an email</RouterLink>
  </WelcomeItem>
</template>
