---
layout: default
transition: slide-left
---

### The "undo" cheat sheet

<div class="term-print max-w-3xl mx-auto mt-6">
<TermWindow title="survival kit">
<div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git restore &lt;file&gt;</span><span class="text-gray-400">discard edits, back to last commit</span></div>
<div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git restore -s HEAD~1 &lt;file&gt;</span><span class="text-gray-400">bring back an earlier version</span></div>
<div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git restore --staged &lt;file&gt;</span><span class="text-gray-400">unstage, keep your edits</span></div>
<div v-click="4" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git clean -fd</span><span class="text-gray-400">delete untracked files &amp; folders</span></div>
<div v-click="5" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git commit --amend</span><span class="text-gray-400">fix the last message, before pushing</span></div>
<div v-click="6" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git reset --soft HEAD~1</span><span class="text-gray-400">undo last commit, keep the work</span></div>
<div v-click="7" class="py-1"><span class="text-amber-300 font-700 inline-block w-72">git revert &lt;hash&gt;</span><span class="text-gray-400">reverse a pushed commit, team-safe</span></div>
</TermWindow>
</div>

<div v-click="8" class="mark-safe mt-6 text-center text-lg opacity-85">
Before a push, undo freely. After a push, <span v-mark="{ at: 8, color: '#d97706', type: 'underline' }">use revert</span>.
</div>

<!--
[click] restore a file wipes your unsaved edits back to the last commit; the everyday "undo my changes"
[click] restore -s HEAD~1 brings back the version of a file from one commit ago, even if you had committed over it; -s is short for --source
[click] restore --staged takes a file out of staging but keeps your edits; you unstaged, you did not lose work
[click] clean -fd deletes untracked files and folders for good; use it to wipe junk Git is not tracking; there is no undo, so check git status first
[click] amend fixes the last commit's message or adds a forgotten file, but only before you have pushed it
[click] reset --soft removes the last commit and leaves the changes staged; nothing lost
[click] revert is the team-safe one: it adds a NEW commit that undoes an old one, so shared history is never rewritten
[click] the rule that keeps you safe: rewrite freely before pushing; once it is shared, only revert
- gloss: amend/reset edit the past (fine while private); revert writes a new "we changed our minds" page (safe in public)
- warn: clean is the one genuinely destructive command here; unlike restore, deleted untracked files are not recoverable
-->
