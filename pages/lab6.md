---
layout: default
transition: slide-left
---

<Lab :n="6" title="Push a branch & open a Merge Request" prep="Your clone · your feature branch → MR into main · a partner reviews" goal="Take a change all the way through the GitLab MR flow with a reviewer." caution="Swap: be the author on one MR and the reviewer on a partner's. Leave at least one real comment.">

<li v-click="1" class="step-row"><span class="step-num">1</span><span>Create <code>feature/mr-yourname</code> and make a small edit.</span></li>
<li v-click="2" class="step-row"><span class="step-num">2</span><span>Push it: <code>git push -u origin feature/mr-yourname</code>.</span></li>
<li v-click="3" class="step-row"><span class="step-num">3</span><span>In GitLab, click <b>Create merge request</b>.</span></li>
<li v-click="4" class="step-row"><span class="step-num">4</span><span>Add a title, description, and assign a reviewer.</span></li>
<li v-click="5" class="step-row"><span class="step-num">5</span><span>Reviewer comments; then Merge. Delete the branch.</span></li>

<template #terminal>
<TermWindow title="your turn">
<div v-click="1"><span class="text-green-400">$</span> git switch -c feature/mr-ali</div>
<div v-click="1" class="opacity-50"># ...edit a file...</div>
<div v-click="1"><span class="text-green-400">$</span> git add . &amp;&amp; git commit -m "Tweak"</div>
<div v-click="2"><span class="text-green-400">$</span> git push -u origin feature/mr-ali</div>
<div v-click="3" class="opacity-50"># GitLab prints an MR link —</div>
<div v-click="3" class="opacity-50"># open it in your browser</div>
</TermWindow>
</template>

</Lab>

<!--
- the full MR flow, hands-on; the terminal part is short, most of it happens in the GitLab browser
[click] branch and make one small change so the diff is easy to read
[click] push with -u so the branch links to origin; GitLab prints a ready-made MR link in the output
[click] click Create merge request in GitLab, or follow that printed link
[click] give it a clear title and description, and assign a partner as reviewer
[click] the reviewer leaves a comment, then you merge and delete the branch
- ACTIVITY: authors paste their MR link in the chat; each person opens a partner's and leaves one specific, kind comment
-->
