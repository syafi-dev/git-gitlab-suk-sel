---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-blue-600 dark:text-blue-400">part 3</span> &middot; gitlab collaboration</p>

### GitLab: more than Git hosting

<p class="text-sm opacity-60 mt-1 mb-6">One platform for the whole workflow — not just a place to store code.</p>

<div class="pop grid grid-cols-3 gap-x-10 gap-y-5 max-w-4xl mx-auto text-center">

<div v-click="1">
  <div class="medallion !w-14 !h-14 bg-cyan-500/10"><mdi-source-repository class="text-2xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="font-700 mt-2 mb-1">Repository</p>
  <p class="text-sm opacity-65 m-0">Host &amp; version your code.</p>
</div>

<div v-click="1">
  <div class="medallion !w-14 !h-14 bg-amber-500/10"><mdi-format-list-checks class="text-2xl text-amber-600 dark:text-amber-400" /></div>
  <p class="font-700 mt-2 mb-1">Issues</p>
  <p class="text-sm opacity-65 m-0">Track tasks &amp; bugs.</p>
</div>

<div v-click="2">
  <div class="medallion !w-14 !h-14 bg-green-500/10"><mdi-source-pull class="text-2xl text-green-600 dark:text-green-400" /></div>
  <p class="font-700 mt-2 mb-1">Merge Requests</p>
  <p class="text-sm opacity-65 m-0">Review &amp; merge changes.</p>
</div>

<div v-click="2">
  <div class="medallion !w-14 !h-14 bg-purple-500/10"><mdi-rocket-launch-outline class="text-2xl text-purple-600 dark:text-purple-400" /></div>
  <p class="font-700 mt-2 mb-1">CI/CD Pipelines</p>
  <p class="text-sm opacity-65 m-0">Auto build, test, deploy.</p>
</div>

<div v-click="3">
  <div class="medallion !w-14 !h-14 bg-blue-500/10"><mdi-view-column-outline class="text-2xl text-blue-600 dark:text-blue-400" /></div>
  <p class="font-700 mt-2 mb-1">Boards</p>
  <p class="text-sm opacity-65 m-0">Plan work visually.</p>
</div>

<div v-click="3">
  <div class="medallion !w-14 !h-14 bg-orange-500/10"><mdi-book-open-variant class="text-2xl" style="color:#fc6d26" /></div>
  <p class="font-700 mt-2 mb-1">Wiki &amp; Milestones</p>
  <p class="text-sm opacity-65 m-0">Docs &amp; release planning.</p>
</div>

</div>

<div v-click="4" class="mt-5 text-center text-base opacity-80">
Plan, code, review, ship — <span style="color:#fc6d26" class="font-600">all in one place</span>.
</div>

<!--
- GitLab is a full DevOps platform; Git hosting is only the start of what it does
[click] the repository hosts your code, and Issues track every task and bug, like a shared to-do list for the team
[click] Merge Requests are where code gets reviewed before it lands; CI/CD pipelines automatically build, test, and even deploy your code on every push
[click] Boards turn issues into a visual kanban to plan the week; the Wiki holds documentation and Milestones group work toward a release
[click] the value is one place for everything: the plan, the code, the review, and the shipping; fewer tools, less context-switching
- today we focus on the repo and Merge Requests, but it helps to know the rest is there when you need it
-->
