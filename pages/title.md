---
class: text-center
transition: fade-out
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

<div v-motion :initial="{ y: -14, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 500 } }" class="flex items-center justify-center gap-3 mb-6">
  <img :src="`${base}suk-logo.png`" class="h-9" alt="SUK Selangor" />
  <span class="text-xs font-mono tracking-[0.22em] uppercase opacity-60">Setiausaha Kerajaan Negeri Selangor</span>
</div>

<div v-motion :initial="{ scale: 0.7, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }" class="flex items-center justify-center gap-6 mb-6 text-6xl">
  <mdi-git class="text-red-600 dark:text-red-400 opacity-85" />
  <logos-gitlab-icon class="opacity-90" />
</div>

<div v-motion :initial="{ y: 22, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 350 } }">

# Mastering Git & GitLab

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 650, duration: 500 } }" class="mt-3 text-lg opacity-70">
Sharpening the everyday workflow, and fixing the mistakes that trip teams up.
</div>

<div class="mt-8 text-sm opacity-50 font-mono">
<span class="type-mount"><span class="type-mount-text" style="animation-delay: 850ms">1-day refresher workshop</span></span>
</div>

<!--
- welcome everyone; this is a hands-on refresher, so a laptop with Git and GitLab access is the ticket in
- housekeeping: four blocks across the day, each one is short recap then you run the lab yourself, then we debrief
- questions anytime; we batch the bigger ones at each break
- facilitator: Syafiyullah Yahya, MBOT Professional Technologist and HRD Corp Accredited Trainer
- ASK: type 1 in the chat if you use Git most days, 2 if it is occasional. Sets the room.
-->
