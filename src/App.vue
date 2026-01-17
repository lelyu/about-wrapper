<script setup lang="ts">
// No complex logic needed for a static bio.
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
    <div class="max-w-2xl mx-auto px-6 py-20 md:py-32">
      <header class="mb-12">
        <h1 class="text-4xl font-bold tracking-tight mb-2">Le Lyu</h1>
        <p class="text-xl text-gray-500 font-light">Software Engineer & Creative Technologist</p>
      </header>

      <main class="space-y-8 text-lg leading-relaxed text-gray-700">
        <p>
          Hi, I go by <strong>Lok</strong>. I am a software engineer currently based in Hong Kong,
          working at the
          <a href="https://cpii.hk/" target="_blank" class="link"
            >Centre for Perceptual and Interactive Intelligence (CPII)</a
          >
        </p>

        <p>
          My journey has been a bit of a global tour. I grew up in <strong>Guangzhou</strong>, spent
          five formative years in <strong>Massachusetts</strong> for university and early work, and
          have now landed in the vibrant tech scene of Hong Kong.
        </p>

        <p>
          I specialize in building the <strong>frontend for agentic AI applications</strong>. While
          my expertise lies in crafting high-fidelity, responsive interfaces using
          <strong>Vue.js</strong> and <strong>TypeScript</strong>, I am deeply interested in the
          entire AI stack. Currently, I'm bridging the gap between design and logic by diving into
          <strong>LangGraph</strong>, learning how to better orchestrate the backend agents that
          power my UIs.
        </p>

        <p>
          I obsess over performance and type safety. Recently, I implemented Strategy Design
          Patterns to refactor legacy modules, achieving a
          <span class="font-medium text-gray-900">10x increase in processing speed</span>. I also
          enjoy the challenge of real-time interactions—wiring up WebSockets to stream LLM responses
          seamlessly to the client.
        </p>

        <p>
          I am a Class of 2024 graduate from
          <a href="https://www.bc.edu/" target="_blank" class="link">Boston College</a>, where I
          double-majored in <strong>Computer Science</strong> and <strong>Economics</strong>. During
          my time in the US, I also enjoyed teaching advanced Python concepts to students at
          <em>iCode</em>.
        </p>

        <div class="pt-4">
          <p class="text-base text-gray-500 uppercase tracking-wider font-semibold mb-3">
            Core Technologies
          </p>
          <ul class="flex flex-wrap gap-x-6 gap-y-2 text-base text-gray-600">
            <li>Vue.js / TypeScript</li>
            <li>Python (FastAPI)</li>
            <li>Tailwind CSS</li>
            <li>LangGraph (Learning)</li>
          </ul>
        </div>
      </main>

      <footer class="mt-20 pt-8 border-t border-gray-100">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex gap-6">
            <a href="https://www.linkedin.com/in/lelyu/" target="_blank" class="link-subtle">
              LinkedIn
            </a>
            <a href="mailto:lyulelok@gmail.com" class="link-subtle"> Email </a>
            <a href="https://github.com/" target="_blank" class="link-subtle"> GitHub </a>
          </div>

          <p class="text-sm text-gray-400">Hong Kong</p>
        </div>

        <div class="mt-10 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 italic">
          <span class="font-semibold not-italic block mb-1">P.S.</span>
          If you are also in Hong Kong and enjoy outdoor activities (e.g., hiking on weekends), feel
          free to reach out via LinkedIn.
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Custom link styles to mimic the "Evan You" minimalist underline effect. */
.link {
  color: #111827;
  border-bottom: 1px solid #d1d5db;
  transition:
    color 200ms,
    border-color 200ms;
  padding-bottom: 0.125rem;
}

.link:hover {
  color: #2563eb;
  border-bottom-color: #3b82f6;
}

.link-subtle {
  color: #6b7280;
  transition: color 200ms;
}

.link-subtle:hover {
  color: #111827;
}
</style>
