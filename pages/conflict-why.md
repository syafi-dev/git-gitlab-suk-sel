---
layout: default
transition: slide-left
---

### Merge conflicts: why they happen

<p class="text-sm opacity-60 mt-1 mb-4">Two branches change the same line of the same file. Git asks you which wins. Normal, not an error.</p>

<div class="grid grid-cols-2 gap-8 items-center">

<div class="space-y-4">
  <div v-click="1" class="note-row items-start"><mdi-account class="note-ico text-cyan-600 dark:text-cyan-400" /><p><b>Aisyah</b> edits line 10 of <code>app.js</code>, commits &amp; pushes first.</p></div>
  <div v-click="2" class="note-row items-start"><mdi-account class="note-ico text-purple-600 dark:text-purple-400" /><p><b>Ali</b> edits the same line 10, tries to push after.</p></div>
  <div v-click="3" class="note-row items-start"><mdi-alert class="note-ico text-amber-600 dark:text-amber-400" /><p>Ali's push is rejected. They run <code>git pull</code>, and Git flags the clash for them to decide.</p></div>
</div>

<div v-click="4" class="term-print">
<TermWindow title="app.js — flagged">
<div class="text-red-400">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</div>
<div>const title = "Login";</div>
<div class="text-gray-500">=======</div>
<div>const title = "Sign In";</div>
<div class="text-red-400">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/ali</div>
</TermWindow>
</div>

</div>

<div v-click="4" class="mt-6 text-center text-base opacity-80">
<code>HEAD</code> = your current branch. <code>=======</code> splits the two versions.
</div>

<!--
- a conflict only happens when two branches touch the exact same line; Git will not guess who is right, so it asks
[click] Aisyah changes line 10 and pushes first; hers is now on the server
[click] Ali changed the same line; when they push, the server says no, you are behind
[click] they pull, and Git marks the clash inside the file instead of losing anyone's work
[click] the markers are instructions: everything between HEAD and ======= is your version, below it is theirs; your job is to make the file read the way it should, then delete all three marker lines
- reassure: this is routine teamwork, not damage; every developer sees these weekly
-->
