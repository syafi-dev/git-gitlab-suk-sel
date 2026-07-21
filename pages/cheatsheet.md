---
layout: default
transition: slide-left
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

<div class="flex items-center gap-3 mb-3">
  <mdi-content-save-outline class="text-2xl text-red-600 dark:text-red-400" />
  <h3 class="!m-0">Take this with you</h3>
</div>

<div class="term-print grid grid-cols-3 gap-5">

<TermWindow title="daily loop">
<div class="text-amber-300">git pull</div>
<div class="text-amber-300">git add &lt;file&gt;</div>
<div class="text-amber-300">git commit -m "msg"</div>
<div class="text-amber-300">git push</div>
<div class="text-amber-300">git status</div>
<div class="text-amber-300">git log --oneline</div>
</TermWindow>

<TermWindow title="branching">
<div class="text-purple-300">git switch -c &lt;name&gt;</div>
<div class="text-purple-300">git switch main</div>
<div class="text-purple-300">git merge &lt;name&gt;</div>
<div class="text-purple-300">git branch -d &lt;name&gt;</div>
<div class="text-purple-300">git merge --abort</div>
<div class="text-purple-300">git pull</div>
</TermWindow>

<TermWindow title="fix & recover">
<div class="text-green-300">git restore &lt;file&gt;</div>
<div class="text-green-300">git restore --staged &lt;f&gt;</div>
<div class="text-green-300">git commit --amend</div>
<div class="text-green-300">git reset --soft HEAD~1</div>
<div class="text-green-300">git revert &lt;hash&gt;</div>
<div class="text-green-300">git reflog</div>
</TermWindow>

</div>

<div v-click="1" class="mark-safe mt-7 text-center text-lg opacity-85">
Everything from today on one screen — <span v-mark="{ at: 1, color: '#dc2626', type: 'underline' }">screenshot this</span>.
</div>

<div v-click="2" class="mt-3 text-center text-base flex items-center justify-center gap-2">
  <mdi-file-pdf-box class="text-red-600 dark:text-red-400" />
  <span>Printable one-page PDF (all commands): <a :href="`${base}git-gitlab-cheatsheet.pdf`" target="_blank">download here</a></span>
</div>

<!--
- one page, three columns: the daily loop, branching, and fix-and-recover; this is the whole workshop in commands
- point out that they have now typed every one of these at least once today, so none of it is theory
[click] tell them plainly: screenshot this slide, pin it near your desk; look things up for a week and your fingers learn them
[click] and there is a printable one-page PDF with every command grouped by topic; the download link is on the slide, and the slides link from this morning has it too
- the slides link from this morning has this page too, so they can grab it later
-->
