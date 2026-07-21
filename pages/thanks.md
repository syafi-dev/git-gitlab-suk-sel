---
layout: statement
transition: fade-out
---

<div v-motion :initial="{ y: 18, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 100 } }">

# Terima kasih!

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 500, duration: 500 } }" class="mt-5 text-2xl opacity-80">
You're ready to work confidently.
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800, duration: 500 } }" class="mt-3 text-base opacity-60 max-w-xl mx-auto">
Keep the cheat sheet handy, and remember: when in doubt, <code>git status</code>.
</div>

<div class="mt-14 flex items-center justify-center gap-16 text-sm">
  <div v-motion :initial="{ y: 18, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 1100 } }" class="flex flex-col items-center gap-2">
    <mdi-account-tie class="text-4xl opacity-45" />
    <span class="opacity-80">Syafiyullah Yahya</span>
    <span class="text-xs opacity-55">MBOT Professional Technologist</span>
  </div>
  <div v-motion :initial="{ y: 18, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 1300 } }" class="flex flex-col items-center gap-2">
    <mdi-linkedin class="text-4xl opacity-45" />
    <a href="https://linkedin.com/in/syafi" target="_blank">linkedin.com/in/syafi</a>
  </div>
  <div v-motion :initial="{ y: 18, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 1500 } }" class="flex flex-col items-center gap-2">
    <mdi-github class="text-4xl opacity-45" />
    <a href="https://github.com/syafi-dev" target="_blank">github.com/syafi-dev</a>
  </div>
</div>

<!--
- thank the room; this was hands-on, so the win is that the labs are now reflexes, not theory
- questions, war stories, edge cases: open floor now
- point them at the one-page cheat sheet slide again; screenshot it if they have not
- reachable on LinkedIn and GitHub for follow-up questions after today
-->
