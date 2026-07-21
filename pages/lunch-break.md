---
layout: statement
transition: fade
class: text-center
---

<div v-motion :initial="{ scale: 0.6, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 100 } }" class="flex justify-center mb-6">
  <div class="medallion !w-24 !h-24 bg-amber-500/10"><mdi-silverware-fork-knife class="text-5xl text-amber-600 dark:text-amber-400" /></div>
</div>

<div v-motion :initial="{ y: 16, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 250 } }">

# Lunch break

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 550, duration: 500 } }" class="mt-4 text-2xl opacity-80 font-mono">
13:00 — 14:00
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800, duration: 500 } }" class="mt-6 text-lg opacity-65">
Rest, refuel, and stretch. We resume at 2:00 with <span class="text-blue-600 dark:text-blue-400 font-600">Part 3 · GitLab Collaboration</span>.
</div>

<!--
- morning done: they can now run the whole daily loop, branch, and resolve a conflict; that is the hard half
- housekeeping before the break: back sharp at 2:00; leave laptops on but locked
- tell them the afternoon is the team side, GitLab: remotes, Merge Requests, and two roleplay labs
- ASK before breaking: type one thing from this morning they want to try on a real project; read a couple back after lunch
-->
