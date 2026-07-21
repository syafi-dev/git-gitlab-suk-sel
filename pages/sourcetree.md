---
layout: default
transition: slide-left
---

### Sourcetree: Git you can see

<p class="text-sm opacity-60 mt-1 mb-4">A free desktop GUI. Same Git underneath — the buttons run the commands for you.</p>

<div class="grid grid-cols-2 gap-8 items-stretch">

<div v-motion :initial="{ x: -40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-left rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700 h-full">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">Sourcetree</span>
  </div>
  <div class="px-5 py-4 text-sm">
    <div v-click="1" class="flex items-center gap-4 pb-3 mb-3 border-b border-gray-300 text-gray-500 text-xs">
      <span class="flex items-center gap-1"><mdi-arrow-down /> Pull</span>
      <span class="flex items-center gap-1"><mdi-arrow-up /> Push</span>
      <span class="flex items-center gap-1"><mdi-source-branch /> Branch</span>
      <span class="flex items-center gap-1 text-cyan-600 font-600"><mdi-check /> Commit</span>
    </div>
    <div v-click="2" class="flex items-center gap-2 py-2">
      <svg width="70" height="34" viewBox="0 0 70 34"><line x1="8" y1="17" x2="62" y2="17" stroke="#2563eb" stroke-width="2"/><path d="M20 17 C 30 17, 32 8, 42 8" stroke="#7c3aed" stroke-width="2" fill="none"/><circle cx="8" cy="17" r="5" fill="#2563eb"/><circle cx="42" cy="8" r="5" fill="#7c3aed"/><circle cx="62" cy="17" r="5" fill="#16a34a"/></svg>
      <span class="text-xs text-gray-500">the history, drawn for you</span>
    </div>
    <div v-click="3" class="mt-1 space-y-1.5">
      <div class="flex items-center gap-2"><mdi-checkbox-marked class="text-cyan-600" /> README.md</div>
      <div class="flex items-center gap-2"><mdi-checkbox-marked class="text-cyan-600" /> index.html</div>
    </div>
    <div v-click="4" class="mt-3 flex items-center gap-2">
      <div class="flex-1 bg-white border border-gray-300 rounded px-2 py-1 text-xs text-gray-500">Add my details</div>
      <div class="bg-cyan-600 text-white rounded px-3 py-1 text-xs font-600">Commit</div>
    </div>
  </div>
</div>
</div>

<div v-motion :initial="{ x: 40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-right h-full term-print">
<TermWindow title="the same, typed">
<div v-click="1"><span class="text-green-400">$</span> git pull</div>
<div v-click="2" class="opacity-50"># ...edit files...</div>
<div v-click="3"><span class="text-green-400">$</span> git add README.md index.html</div>
<div v-click="4"><span class="text-green-400">$</span> git commit -m "Add my details"</div>
<div v-click="4"><span class="text-green-400">$</span> git push</div>
</TermWindow>
</div>
</div>

</div>

<div v-click="4" class="mark-safe mt-6 text-center text-lg opacity-85">
Same Git — Sourcetree just <span v-mark="{ at: 4, color: '#0891b2', type: 'underline' }">shows the graph</span> and clicks the commands.
</div>

<!--
- Sourcetree is a free desktop app from Atlassian; a friendly window over the same Git you just learned
[click] the toolbar has the everyday actions as buttons: Pull, Push, Branch, Commit; clicking Pull runs git pull
[click] its best feature is the history graph, drawn for you; branches and merges become a picture instead of something you imagine in your head; great when we hit conflicts later
[click] you tick the files you want to stage instead of typing git add; the checkboxes are the staging area
[click] you type a message and click Commit; that is git commit; then Push sends it up
- so nothing new to memorise: every button is one of the commands from the last slides; use whichever view helps you think
- we will clone today's repo and everyone can do the loop in the terminal, in VS Code, or here in Sourcetree
-->
