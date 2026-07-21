---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; git core refresher</p>

### Two ways a repo begins

<div class="grid grid-cols-2 gap-8 mt-6 items-start">

<div v-click="1">
  <div class="flex items-center gap-3 mb-2">
    <div class="medallion !w-11 !h-11 !mx-0 bg-green-500/10 flex-shrink-0"><mdi-folder-plus-outline class="text-2xl text-green-600 dark:text-green-400" /></div>
    <div>
      <p class="font-700 text-lg m-0">Start fresh</p>
      <p class="text-sm opacity-65 m-0">Turn a folder into a repo.</p>
    </div>
  </div>
  <div class="term-print">
  <TermWindow title="git init">
    <div><span class="text-green-400">$</span> mkdir my-project</div>
    <div><span class="text-green-400">$</span> cd my-project</div>
    <div><span class="text-green-400">$</span> git init</div>
    <div class="text-gray-400"># Initialized empty Git repository</div>
  </TermWindow>
  </div>
</div>

<div v-click="2">
  <div class="flex items-center gap-3 mb-2">
    <div class="medallion !w-11 !h-11 !mx-0 bg-blue-500/10 flex-shrink-0"><mdi-cloud-download-outline class="text-2xl text-blue-600 dark:text-blue-400" /></div>
    <div>
      <p class="font-700 text-lg m-0">Join existing</p>
      <p class="text-sm opacity-65 m-0">Copy a repo down from GitLab.</p>
    </div>
  </div>
  <div class="term-print">
  <TermWindow title="git clone">
    <div class="break-all"><span class="text-green-400">$</span> git clone https://git.selangor.gov.my/training/practice.git</div>
    <div><span class="text-green-400">$</span> cd practice</div>
    <div class="text-gray-400"># a full copy, history and all</div>
  </TermWindow>
  </div>
</div>

</div>

<div v-click="3" class="mt-6 text-center text-base opacity-80">
Today we <b>clone</b> the training repo — but every repo was born from <code>git init</code>.
</div>

<!--
- before any of the daily loop, a repo has to exist; there are exactly two ways to get one
[click] git init starts a brand-new repo: make a folder, go into it, run git init once, and Git begins tracking history there; this is how a project that has no repo yet gets one
[click] git clone joins an existing project: it copies the whole repo down from GitLab, full history included, and you are ready to work; this is what we all do in Lab 1
[click] you only run init once per new project; from then on it is clone for everyone else who joins
- gloss: git init is laying the first brick of a new building; git clone is getting the full blueprints and a copy of an existing one
- ASK: type 1 if you have ever run git init, 2 if you have only ever cloned; most people have only cloned, which is normal
-->
