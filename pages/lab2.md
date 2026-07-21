---
layout: default
transition: slide-left
---

<Lab :n="2" title="Staging & undo drills" prep="Your Lab 1 clone · solo · all local — nothing is pushed" goal="Choose exactly what to commit, and fix mistakes before they leave your machine." caution="Everything here is local and unpushed, so experiment freely. Nothing can affect teammates yet.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Edit two files. Stage only one with <code>git add &lt;file&gt;</code>, then <code>git status</code>.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Run <code>git add -p</code> on the other and stage just one chunk.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Commit, spot a typo, fix it with <code>git commit --amend</code>.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Make one more commit, then undo it with <code>git reset --soft HEAD~1</code>.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Inspect: <code>git diff</code>, <code>git log --oneline</code>, <code>git show</code>.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1" class="opacity-50"># edit file1.txt and file2.txt first</div>
<div v-click="1"><span class="text-green-400">$</span> git add file1.txt</div>
<div v-click="1"><span class="text-green-400">$</span> git status</div>
<div v-click="2"><span class="text-green-400">$</span> git add -p file2.txt</div>
<div v-click="3"><span class="text-green-400">$</span> git commit -m "Add intro section"</div>
<div v-click="3"><span class="text-green-400">$</span> git commit --amend</div>
<div v-click="4"><span class="text-green-400">$</span> git reset --soft HEAD~1</div>
<div v-click="5"><span class="text-green-400">$</span> git log --oneline</div>
</TermWindow>
</template>

</Lab>

<!--
- this lab is about control: staging deliberately, and undoing safely while it is all still local
[click] stage one of two files, then status shows one staged (green) and one not (red)
[click] add -p asks per chunk; you stage a single hunk, not the whole file; powerful for tidy commits
[click] amend rewrites the last commit; use it to fix a message or add a forgotten file, before pushing only
[click] reset --soft removes the commit but keeps the changes staged; the safest undo
[click] diff, log, show let you read your own history
- ACTIVITY: before pressing Enter on reset --soft, ask the chat to predict whether the file edits survive; then run it
- reassure: nothing here has been pushed, so none of it can reach a teammate; break things
-->
