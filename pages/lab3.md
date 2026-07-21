---
layout: default
transition: slide-left
---

<Lab :n="3" title="Feature branch → commit → merge" prep="Your Lab 1 clone · solo · your own branch feature/&lt;name&gt;" goal="Do a full branch cycle: split off, work, and merge back cleanly." caution="Nobody else touched your lines, so Git just moves the pointer forward — a clean fast-forward merge.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>From main, run <code>git pull</code> to be current.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Create a branch: <code>git switch -c feature/your-name</code>.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Add a line to <code>README.md</code> and commit it.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Switch back to main and pull again.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Merge your branch in — this one fast-forwards.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1"><span class="text-green-400">$</span> git switch main &amp;&amp; git pull</div>
<div v-click="2"><span class="text-green-400">$</span> git switch -c feature/aisyah</div>
<div v-click="3" class="opacity-50"># ...edit README.md...</div>
<div v-click="3"><span class="text-green-400">$</span> git add README.md</div>
<div v-click="3"><span class="text-green-400">$</span> git commit -m "Add my note"</div>
<div v-click="4"><span class="text-green-400">$</span> git switch main &amp;&amp; git pull</div>
<div v-click="5"><span class="text-green-400">$</span> git merge feature/aisyah</div>
</TermWindow>
</template>

</Lab>

<!--
- one clean branch cycle end to end; this is the pattern you use for every change from now on
[click] pull first so you branch from current main
[click] switch -c makes and enters your branch
[click] make a small edit, add, commit; a normal snapshot, just on your branch
[click] back to main, pull again in case someone merged while you worked
[click] merge folds it in; because main did not move, this is a fast-forward, the pointer just slides
- ACTIVITY: predict in chat whether this merge will say "fast-forward"; then run it and read the output together
-->
