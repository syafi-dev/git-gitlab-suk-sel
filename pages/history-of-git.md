---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; git core refresher</p>

### Where Git came from

<div class="pop grid grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto text-center">

<div v-click="1" class="relative pt-6">
  <span class="ghost-num font-mono">2005</span>
  <div class="medallion bg-red-500/10"><mdi-penguin class="text-3xl text-red-600 dark:text-red-400" /></div>
  <p class="font-700 mt-3 mb-1">Born in days</p>
  <p class="text-sm opacity-65 m-0">Linus Torvalds built it for the Linux kernel.</p>
</div>

<div v-click="2" class="relative pt-6">
  <span class="ghost-num font-mono">∞</span>
  <div class="medallion bg-cyan-500/10"><mdi-source-repository-multiple class="text-3xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="font-700 mt-3 mb-1">Distributed</p>
  <p class="text-sm opacity-65 m-0">Every clone holds the full history.</p>
</div>

<div v-click="3" class="relative pt-6">
  <span class="ghost-num font-mono">now</span>
  <div class="medallion bg-green-500/10"><mdi-earth class="text-3xl text-green-600 dark:text-green-400" /></div>
  <p class="font-700 mt-3 mb-1">Everywhere</p>
  <p class="text-sm opacity-65 m-0">GitHub, GitLab &amp; Bitbucket all run on Git.</p>
</div>

</div>

<div v-click="4" class="mt-12 flex items-center justify-center gap-2 text-base opacity-80">
  <mdi-emoticon-wink-outline class="text-amber-600 dark:text-amber-400" />
  <span>"Git" is British slang for a difficult person — Linus named it after himself, as a joke.</span>
</div>

<!--
- quick story to warm up, then we get hands-on; knowing where Git came from makes the rest make sense
- ASK: type in the chat which year you think Git was created; read a few guesses, then reveal
[click] 2005: the Linux kernel team lost free use of their old tool, so Linus Torvalds, who also made Linux, wrote Git in a matter of days; his goals were speed, safety, and handling a project as huge as the kernel
[click] distributed means there is no single master copy; every person who clones gets the entire history, so any laptop can rebuild the project; that is why Git is so resilient
[click] today it is the world standard; GitHub, GitLab, Bitbucket are all websites built on top of plain Git; learn Git once and all of them make sense
[click] the fun bit: "git" is British slang for an annoying person; Linus joked that he names everything after himself, first Linux, then Git
- gloss: "distributed" is like everyone having a full photocopy of the whole filing cabinet, not just borrowing one folder from a central office
-->
