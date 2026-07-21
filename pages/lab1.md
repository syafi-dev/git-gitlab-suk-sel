---
layout: default
transition: slide-left
---

<Lab :n="1" title="Clone → change → commit → push" goal="Run one full loop against the GitLab Selangor training repo." caution="Do it your way — terminal, VS Code, or Sourcetree. If push is rejected, run git pull first, then push again.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Clone the training repo from GitLab Selangor.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Open <code>README.md</code> and add your details (name, unit, role).</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Check <code>git status</code> to see the change.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Stage, commit with a clear message, then push.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Refresh GitLab in your browser to see it appear.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1"><span class="text-green-400">$</span> git clone git@git.selangor.gov.my:training/practice.git</div>
<div v-click="1"><span class="text-green-400">$</span> cd practice</div>
<div v-click="2" class="opacity-50"># ...add your details to README.md...</div>
<div v-click="3"><span class="text-green-400">$</span> git status</div>
<div v-click="4"><span class="text-green-400">$</span> git add README.md</div>
<div v-click="4"><span class="text-green-400">$</span> git commit -m "Add Ali: IT unit, admin officer"</div>
<div v-click="4"><span class="text-green-400">$</span> git push</div>
</TermWindow>
</template>

</Lab>

<!--
- everyone clones the same training repo I set up on GitLab Selangor; this is the whole daily loop in one lab, nothing fancy
- say it out loud: do this loop in whichever tool you like today, the terminal, VS Code's Source Control panel, or Sourcetree; the steps are identical
- ACTIVITY: before anyone presses Enter on git push, ask the chat to predict what GitLab shows on refresh. Then we all refresh together.
[click] clone copies the training repo down; cd into it
[click] open README and add your details, name, unit, role, so every commit is visibly yours
[click] status is the map: it shows README as modified, not yet staged
[click] add stages it, commit saves the snapshot with a message that says what and why, push shares it
[click] refresh GitLab: your commit and name are there, live for the whole room
- gloss: "commit" is a saved snapshot, like a labelled photo of the project at this moment
- FALLBACK: if git.selangor.gov.my is unreachable, use the mirror repo on gitlab.com given in the setup sheet
-->
