---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; git core refresher</p>

### What is version control?

<p class="text-sm opacity-70 mt-1 mb-5 max-w-3xl">A <b>version control system (VCS)</b> records every change to your files over time — so you can see the history, compare versions, and roll back any time. Git is one of many.</p>

<div class="pop grid grid-cols-3 gap-4 max-w-4xl mx-auto">

<div v-click="1" class="rounded-xl border-2 border-red-500/60 bg-red-500/5 px-4 py-3">
  <div class="flex items-center gap-2"><mdi-git class="text-xl text-red-600 dark:text-red-400" /><span class="font-700">Git</span><span class="ml-auto text-[0.6rem] font-700 uppercase tracking-wider text-red-600 dark:text-red-400">the standard</span></div>
  <p class="text-xs opacity-65 mt-1 mb-0">2005 · distributed · runs most projects today</p>
</div>

<div v-click="1" class="rounded-xl border border-gray-400/25 px-4 py-3">
  <div class="flex items-center gap-2"><mdi-alpha-m-circle-outline class="text-xl text-purple-600 dark:text-purple-400" /><span class="font-700">Mercurial</span></div>
  <p class="text-xs opacity-65 mt-1 mb-0">2005 · distributed · <span class="text-purple-600 dark:text-purple-400">like Git</span></p>
</div>

<div v-click="2" class="rounded-xl border border-gray-400/25 px-4 py-3">
  <div class="flex items-center gap-2"><mdi-alpha-s-circle-outline class="text-xl text-blue-600 dark:text-blue-400" /><span class="font-700">Subversion</span></div>
  <p class="text-xs opacity-65 mt-1 mb-0">2000 · <span class="text-blue-600 dark:text-blue-400">centralized</span> (SVN)</p>
</div>

<div v-click="2" class="rounded-xl border border-gray-400/25 px-4 py-3">
  <div class="flex items-center gap-2"><mdi-alpha-c-circle-outline class="text-xl text-blue-600 dark:text-blue-400" /><span class="font-700">CVS</span></div>
  <p class="text-xs opacity-65 mt-1 mb-0">1990 · centralized · the pioneer</p>
</div>

<div v-click="3" class="rounded-xl border border-gray-400/25 px-4 py-3">
  <div class="flex items-center gap-2"><mdi-alpha-p-circle-outline class="text-xl text-blue-600 dark:text-blue-400" /><span class="font-700">Perforce</span></div>
  <p class="text-xs opacity-65 mt-1 mb-0">centralized · huge codebases, games</p>
</div>

<div v-click="3" class="rounded-xl border border-gray-400/25 px-4 py-3">
  <div class="flex items-center gap-2"><mdi-alpha-b-circle-outline class="text-xl text-purple-600 dark:text-purple-400" /><span class="font-700">Bazaar</span></div>
  <p class="text-xs opacity-65 mt-1 mb-0">distributed · Ubuntu's old choice</p>
</div>

</div>

<div v-click="4" class="mt-6 text-center text-base opacity-80">
They all solve the same problem — <span class="text-red-600 dark:text-red-400 font-600">Git won</span>, and runs the vast majority of projects today.
</div>

<!--
- version control is the category; Git is one tool in it, the one that took over
[click] Git and Mercurial are the modern pair; both distributed, both from 2005; if you know Git, Mercurial feels familiar
[click] Subversion and CVS are the older, centralized generation; still alive in some places, especially government and enterprise
[click] Perforce is centralized too, favoured for giant codebases and game studios; Bazaar was Ubuntu's distributed system, now retired
[click] the point: this is a whole family of tools solving one problem; we learn Git because it is the standard, and the ideas transfer to the others
- gloss: "distributed" vs "centralized" is the big split; that is the very next slide
-->
