---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; git core refresher</p>

### How you'll work today

<p class="text-sm opacity-60 mt-1 mb-2">Git is the engine. You drive it three ways — all pushing to the same server.</p>

<div class="pop grid grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto text-center">

<div v-click="1">
  <div class="medallion bg-amber-500/10"><mdi-console-line class="text-3xl text-amber-600 dark:text-amber-400" /></div>
  <p class="font-700 mt-3 mb-1">Terminal (Git CLI)</p>
  <p class="text-sm opacity-65 m-0">The real commands, typed by hand.</p>
</div>

<div v-click="2">
  <div class="medallion bg-blue-500/10"><logos-visual-studio-code class="text-3xl" /></div>
  <p class="font-700 mt-3 mb-1">VS Code</p>
  <p class="text-sm opacity-65 m-0">Your editor, with Git built in.</p>
</div>

<div v-click="3">
  <div class="medallion bg-cyan-500/10"><mdi-file-tree class="text-3xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="font-700 mt-3 mb-1">Sourcetree</p>
  <p class="text-sm opacity-65 m-0">A visual Git GUI — see the graph.</p>
</div>

</div>

<div v-click="4" class="mt-10 flex items-center justify-center gap-2 text-base opacity-85">
  <logos-gitlab-icon class="text-xl" />
  <span>All three sync to <b>GitLab Selangor</b> — <a href="https://git.selangor.gov.my" target="_blank">git.selangor.gov.my</a>, the shared server.</span>
</div>

<!--
- three ways to use Git today; they all do the exact same thing underneath, so pick what feels comfortable
[click] the terminal is the real Git: you type the commands; slower at first, but it works everywhere and teaches you what is actually happening
[click] VS Code has Git built into the Source Control panel; stage and commit with clicks while you edit, no separate app
[click] Sourcetree is a dedicated visual GUI; its big win is showing the branch-and-merge graph as a picture, great for seeing what is going on
[click] whichever you use, everything pushes to GitLab Selangor at git.selangor.gov.my, the shared server we all clone from today
- reassure: the terminal is worth learning because the GUIs are just buttons that run these same commands; we will show both
- gloss: think of Git as a car engine; the terminal, VS Code, and Sourcetree are three different dashboards for the same engine
-->
