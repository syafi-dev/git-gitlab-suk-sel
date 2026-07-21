---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Two minutes: are your tools ready?</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-5 items-start">

<div class="term-print text-[0.82rem]">
<TermWindow title="run these once">
<div v-click="1" class="opacity-50"># 1 · Git is installed</div>
<div v-click="1"><span class="text-green-400">$</span> git --version</div>
<div v-click="2" class="opacity-50"># 2 · You are identified</div>
<div v-click="2"><span class="text-green-400">$</span> git config --global user.name "Your Name"</div>
<div v-click="2"><span class="text-green-400">$</span> git config --global user.email "you@selangor.gov.my"</div>
<div v-click="3" class="opacity-50"># 3 · Line endings + default branch</div>
<div v-click="3"><span class="text-green-400">$</span> git config --global core.autocrlf true <span class="opacity-50"># Mac/Linux: input</span></div>
<div v-click="3"><span class="text-green-400">$</span> git config --global init.defaultBranch main</div>
<div v-click="4" class="opacity-50"># 4 · GitLab is HTTPS-only here (SSH is off)</div>
<div v-click="4" class="opacity-50"># → we create a Personal Access Token next</div>
</TermWindow>
</div>

<div class="space-y-3">
  <div v-click="1" class="note-row items-center"><mdi-check-circle class="note-ico text-green-600 dark:text-green-400" /><p><b>Git ≥ 2.30</b> · any recent version is fine</p></div>
  <div v-click="2" class="note-row items-center"><mdi-check-circle class="note-ico text-green-600 dark:text-green-400" /><p><b>Name &amp; email set</b> · stamped on every commit</p></div>
  <div v-click="3" class="note-row items-center"><mdi-check-circle class="note-ico text-green-600 dark:text-green-400" /><p><b>Line endings set</b> · no phantom whole-file changes across Windows &amp; Mac</p></div>
  <div v-click="4" class="note-row items-center"><mdi-alert-circle class="note-ico text-amber-600 dark:text-amber-400" /><p><b>GitLab access</b> · HTTPS + Personal Access Token (SSH is off) — next slide</p></div>
  <div v-click="5" class="note-row items-center"><mdi-alert-circle class="note-ico text-amber-600 dark:text-amber-400" /><p><b>Practice repo</b> · we clone it together in Lab 1</p></div>
</div>

</div>

<div v-click="5" class="mt-5 text-center text-base opacity-80">
If any line errors out, flag it now so you don't fall behind.
</div>

<!--
- everyone runs these once; the point is to catch a broken setup before Lab 1, not during it
[click] version proves Git is installed; any recent version works
[click] name and email get stamped on every commit; set them once, globally
[click] line endings: Windows ends lines differently from Mac and Linux; without this setting a file can show as fully changed just from opening it on another OS; autocrlf fixes that. defaultBranch main means new repos start on "main", not "master"
[click] our GitLab server has SSH switched off, so the old git@ address will not work; we clone over HTTPS and sign in with a Personal Access Token; we make that token on the very next slide
[click] if a config line errors, raise a hand; a neighbour or I will sort it in the next two minutes
- gloss: line endings are the invisible "enter" character; Windows writes two, Mac/Linux write one; autocrlf translates automatically so Git does not see the whole file as edited
- PREP night before: confirm git.selangor.gov.my HTTPS is reachable from the training room network, and that participant accounts can create personal access tokens (have deploy tokens or pre-made credentials as a fallback)
-->
