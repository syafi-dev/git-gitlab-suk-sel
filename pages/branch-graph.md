---
layout: default
transition: slide-left
clicks: 4
---

<script setup>
const blue = '#2563eb', purple = '#7c3aed', green = '#16a34a'
const commits = [
  { id: 'init',   x: 90,  y: 175, color: blue,   at: 0 },
  { id: 'readme', x: 200, y: 175, color: blue,   at: 1 },
  { id: 'login',  x: 300, y: 85,  color: purple, at: 2 },
  { id: 'edit',   x: 330, y: 175, color: blue,   at: 3 },
  { id: 'merge',  x: 450, y: 175, color: green,  at: 4 },
]
const wires = [
  { d: 'M40 175 H90',  color: blue, at: 0 },
  { d: 'M90 175 H200', color: blue, at: 1 },
  { d: 'M200 175 H330', color: blue, at: 3 },
  { d: 'M330 175 H450', color: blue, at: 4 },
  { d: 'M200 175 C 240 175,260 85,300 85', color: purple, at: 2 },
  { d: 'M300 85 C 360 85,400 175,450 175', color: green, at: 4 },
]
const labels = [
  { text: 'main', x: 40, y: 162, color: blue, at: 0 },
  { text: 'feature/login', x: 250, y: 66, color: purple, at: 2 },
]
const head = [[90,175],[200,175],[300,85],[330,175],[450,175]]
</script>

### What a branch is

<div class="grid grid-cols-2 gap-10 mt-6 items-center">

<div>
  <GitGraph :commits="commits" :wires="wires" :labels="labels" :head="head" />
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-source-branch class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>A movable pointer</b> <span class="opacity-60">&middot; to one commit</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-hammer-wrench class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>Work in isolation</b> <span class="opacity-60">&middot; main stays untouched</span></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-source-merge class="note-ico text-green-600 dark:text-green-400" />
    <p><b>Merge back fast</b> <span class="opacity-60">&middot; the healthy pattern</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mt-8 text-center text-base opacity-80">
Short-lived branches merge back fast.
</div>

<!--
- a branch is just a movable pointer to a commit; the graph is the whole idea
[click] here is main with two commits; nothing unusual yet
[click] we branch off to feature/login and build there; main is not touched at all
[click] meanwhile main can move on independently, other people keep working
[click] then we merge feature/login back in; the green commit joins the two lines
- gloss: think of main as the shared trunk and a branch as a side desk where you work without disturbing anyone
- ASK: A/B/C, say it aloud. When do you branch: A only for big features, B for every change, C never. Read the top pick, then set up that every change gets a branch (Part 2 labs prove it painless).
-->
