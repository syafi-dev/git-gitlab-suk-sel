---
layout: default
transition: slide-left
---

<Lab :n="1" title="Clone → change → commit → push" goal="Run one full loop end-to-end against the practice repo." caution="If push is rejected, someone pushed first. Run git pull, then push again. We cover why in Part 2.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Clone the practice repo to your machine.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Open <code>README.md</code> and add your name to the list.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Check <code>git status</code> to see the change.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Stage, commit with a clear message, then push.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Refresh GitLab in your browser to see it appear.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1"><span class="text-green-400">$</span> git clone git@git.selangor.gov.my:training/practice.git</div>
<div v-click="1"><span class="text-green-400">$</span> cd practice</div>
<div v-click="2" class="opacity-50"># ...edit README.md...</div>
<div v-click="3"><span class="text-green-400">$</span> git status</div>
<div v-click="4"><span class="text-green-400">$</span> git add README.md</div>
<div v-click="4"><span class="text-green-400">$</span> git commit -m "Add Aisyah to team list"</div>
<div v-click="4"><span class="text-green-400">$</span> git push</div>
</TermWindow>
</template>

</Lab>

<!--
- everyone on the shared practice repo; this is the whole daily loop in one lab, nothing fancy
- ACTIVITY: before anyone presses Enter on git push, ask the chat to predict what GitLab shows on refresh. Then we all refresh together.
[click] clone copies the remote repo down; cd into it
[click] add your name in README so every commit is visibly yours
[click] status is the map: it shows README as modified, not yet staged
[click] add stages it, commit saves the snapshot with a message that says what and why, push shares it
[click] refresh GitLab: your commit and name are there, live for the whole room
- gloss: "commit" is a saved snapshot, like a labelled photo of the project at this moment
- FALLBACK: if git.selangor.gov.my is unreachable, use the mirror repo on gitlab.com given in the setup sheet
-->
