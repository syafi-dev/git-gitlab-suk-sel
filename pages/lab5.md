---
layout: default
transition: slide-left
---

<Lab :n="5" title="Create & resolve a merge conflict" prep="In pairs · both push to one shared branch (e.g. pair-03) in the training repo" goal="Deliberately cause a conflict, then fix it, so it becomes routine, not scary." caution="Do this twice and swap roles. The goal is that conflicts stop feeling like emergencies.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Pick a pair number. <b>A</b> makes the shared branch and pushes it.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span><b>B</b> pulls, then switches onto <code>pair-03</code>. Now both are on it.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Both edit the <b>same line</b> of <code>conflict.txt</code>. A commits &amp; pushes first.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>B commits, pushes (rejected), runs <code>git pull</code> — conflict appears.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>B edits the file, removes markers, add, commit, push.</span></li>

<template #terminal>
<TermWindow title="your turn — pair-03">
<div v-click="1" class="opacity-50"># Partner A — make the shared branch</div>
<div v-click="1"><span class="text-green-400">$</span> git switch -c pair-03</div>
<div v-click="1"><span class="text-green-400">$</span> git push -u origin pair-03</div>
<div v-click="2" class="opacity-50"># Partner B</div>
<div v-click="2"><span class="text-green-400">$</span> git pull &amp;&amp; git switch pair-03</div>
<div v-click="4" class="opacity-50"># B, after the rejected push:</div>
<div v-click="4"><span class="text-green-400">$</span> git pull <span class="text-amber-300"># CONFLICT</span></div>
<div v-click="5"><span class="text-green-400">$</span> git add conflict.txt &amp;&amp; git commit</div>
<div v-click="5"><span class="text-green-400">$</span> git push</div>
</TermWindow>
</template>

</Lab>

<!--
- we cause a conflict on purpose; doing it deliberately is how it stops being scary
[click] pair up and both edit the very same line, so a clash is guaranteed
[click] Partner A pushes first and wins the race
[click] Partner B's push is rejected because B is now behind
[click] B pulls and Git flags the conflict inside conflict.txt
[click] B edits to the final wording, deletes the markers, adds, commits, pushes
- then swap roles and do it again; second time it should feel routine
- ACTIVITY: after resolving, both partners refresh GitLab together to confirm one clean final line
-->
