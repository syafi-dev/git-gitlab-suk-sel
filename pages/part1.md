---
layout: default
transition: slide-up
---

<div class="h-full flex flex-col justify-center relative">

<div class="absolute right-6 top-1/2 -translate-y-1/2 part-numeral select-none pointer-events-none">1</div>

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; git core refresher</p>

<div v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 100 } }">

# Git core refresher

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 450, duration: 500 } }" class="mt-4 text-xl opacity-70 max-w-xl">
The daily cycle you run without thinking: clone, edit, add, commit, push.
</div>

</div>

<!--
- this first block is muscle memory: the loop you already half-know, tightened up
- STORY: land = a clean daily loop prevents most Git pain. Pick a time a teammate's stale copy clobbered your work; ordinary setup, the pain, what it cost the morning, how pulling first ends it differently. 60-90s, close by naming the point.
- we recap the mental model, then Labs 1 and 2 are yours to type, then the common basic mistakes
-->
