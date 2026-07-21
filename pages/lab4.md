---
layout: default
transition: slide-left
---

<Lab :n="4" title="Two features at once" prep="Your clone · solo · two of your own branches, merged locally" goal="Run two parallel tasks on separate branches without mixing changes, then tidy up." caution="Name each branch for its job. Short-lived branches keep merges painless.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>From an updated main, create <code>feature/header</code> and commit.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Switch to main, create <code>feature/footer</code>, and commit.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span><code>git branch</code> to list; switch between them, see files differ.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Merge both into main, one after the other.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Delete both merged branches with <code>git branch -d</code>.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1"><span class="text-green-400">$</span> git switch main &amp;&amp; git pull</div>
<div v-click="1"><span class="text-green-400">$</span> git switch -c feature/header</div>
<div v-click="2"><span class="text-green-400">$</span> git switch -c feature/footer main</div>
<div v-click="3"><span class="text-green-400">$</span> git branch</div>
<div v-click="4"><span class="text-green-400">$</span> git switch main</div>
<div v-click="4"><span class="text-green-400">$</span> git merge feature/header</div>
<div v-click="4"><span class="text-green-400">$</span> git merge feature/footer</div>
<div v-click="5"><span class="text-green-400">$</span> git branch -d feature/header feature/footer</div>
</TermWindow>
</template>

</Lab>

<!--
- two branches at once shows how isolation really works; changes on one never leak into the other
[click] make feature/header off main and commit
[click] make feature/footer, also off main, and commit; note "main" at the end starts it from main not from header
[click] branch lists all three; switch between them and watch the files on disk change to match
[click] merge both into main in turn; each is independent
[click] delete the merged branches with -d to keep the list clean; -d refuses if a branch is unmerged, which is a safety net
- gloss: each branch is a separate desk; switching swaps the papers on your desk to that task's papers
-->
