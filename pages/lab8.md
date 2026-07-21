---
layout: default
transition: slide-left
---

<Lab :n="8" title="Recovery drills" prep="Your clone · solo · all local — safe to break freely" goal="Practise the undos on purpose, so they're reflexes when it counts." caution="No pressure. Nothing here touches shared branches, so break things freely and bring them back.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Make a bad edit, then <code>git restore</code> it away.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Stage a file, then <code>git restore --staged</code> it.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Commit a typo message, fix it with <code>--amend</code>.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Make a commit, undo it with <code>reset --soft</code>.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Run <code>git reflog</code> and read your own history.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1"><span class="text-green-400">$</span> echo "oops" &gt;&gt; notes.txt</div>
<div v-click="1"><span class="text-green-400">$</span> git restore notes.txt</div>
<div v-click="2"><span class="text-green-400">$</span> git add notes.txt</div>
<div v-click="2"><span class="text-green-400">$</span> git restore --staged notes.txt</div>
<div v-click="3"><span class="text-green-400">$</span> git commit -m "tpyo"</div>
<div v-click="3"><span class="text-green-400">$</span> git commit --amend</div>
<div v-click="5"><span class="text-green-400">$</span> git reflog</div>
</TermWindow>
</template>

</Lab>

<!--
- we run each undo on purpose so it becomes a reflex; when a real mistake happens you will not be reaching for notes
[click] make a junk edit, then restore wipes it back to the last commit
[click] stage the file, then restore --staged pulls it back out; your edits survive
[click] commit a deliberate typo in the message, then amend to fix it
[click] make a commit, then reset --soft undoes it while keeping the work staged
[click] reflog shows everywhere HEAD has been; this is the "nothing is truly lost" proof
- reassure: all of this is local and unpushed; break it, fix it, repeat until it feels dull
-->
