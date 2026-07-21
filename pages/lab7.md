---
layout: default
transition: slide-left
---

<Lab :n="7" title="Author & reviewer roleplay" prep="In pairs · one MR each way · you review each other's" goal="Run one real review cycle end-to-end: raise an MR, exchange comments, merge cleanly." caution="Keep comments kind and specific — you're improving the change, not the person.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Author: branch, commit a small change, push, open an MR.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Reviewer: read the diff and leave one specific comment.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>Author: address it with a new commit and push again.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>If GitLab flags a conflict with main, resolve it (Lab 5).</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Reviewer approves; author merges and deletes the branch.</span></li>

<template #terminal>
<TermWindow title="your turn — author">
<div v-click="1"><span class="text-green-400">$</span> git switch -c feature/login-copy</div>
<div v-click="1"><span class="text-green-400">$</span> git commit -am "Update button label"</div>
<div v-click="1"><span class="text-green-400">$</span> git push -u origin feature/login-copy</div>
<div v-click="2" class="opacity-50"># open MR in GitLab, assign reviewer</div>
<div v-click="3" class="opacity-50"># after review, push a fix:</div>
<div v-click="3"><span class="text-green-400">$</span> git commit -am "Address review feedback"</div>
<div v-click="3"><span class="text-green-400">$</span> git push</div>
</TermWindow>
</template>

</Lab>

<!--
- this is a real review cycle, both sides; everyone plays author once and reviewer once
[click] author opens the MR with a small, readable change
[click] reviewer reads the diff and leaves one specific, actionable comment
[click] author responds with a new commit and pushes; the MR updates automatically, no new MR needed
[click] if main moved and GitLab shows a conflict, resolve it exactly like Lab 5
[click] reviewer approves, author merges, branch deleted; cycle complete
- then swap roles; the skill is giving and taking review calmly, which is most of real teamwork
-->
