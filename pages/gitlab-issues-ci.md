---
layout: default
transition: slide-left
---

### Issues → Merge Request → Pipeline

<p class="text-sm opacity-60 mt-1 mb-4">GitLab ties the work to the code and runs your checks automatically.</p>

<div class="grid grid-cols-2 gap-8 items-start">

<div v-click="1">
  <p class="font-700 flex items-center gap-2 mb-2"><mdi-format-list-checks class="text-amber-600 dark:text-amber-400" /> Issues — track the work</p>
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="px-4 py-2 bg-gray-200 border-b border-gray-300 text-xs text-gray-500">Issue #42</div>
    <div class="px-4 py-3">
      <div class="font-700 text-sm">Fix login redirect on timeout</div>
      <div class="flex items-center gap-2 mt-2 text-xs">
        <span class="rounded-full bg-red-100 text-red-700 px-2 py-0.5 font-600">bug</span>
        <span class="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 font-600">priority::high</span>
        <span class="ml-auto text-gray-500">@aisyah</span>
      </div>
    </div>
  </div>
  <p class="text-sm opacity-70 mt-2">A commit or MR that says <code>Closes #42</code> links the code to the task — and closes it on merge.</p>
</div>

<div v-click="2">
  <p class="font-700 flex items-center gap-2 mb-2"><mdi-rocket-launch-outline class="text-purple-600 dark:text-purple-400" /> CI/CD — automate the checks</p>
  <div class="term-print">
  <TermWindow title="pipeline · passed">
    <div class="flex items-center gap-3 py-1">
      <mdi-check-circle class="text-green-400" /> <span class="text-gray-200">build</span>
      <span class="text-gray-600">→</span>
      <mdi-check-circle class="text-green-400" /> <span class="text-gray-200">test</span>
      <span class="text-gray-600">→</span>
      <mdi-check-circle class="text-green-400" /> <span class="text-gray-200">deploy</span>
    </div>
    <div class="text-gray-500 text-xs mt-1"># runs on every push, defined in .gitlab-ci.yml</div>
  </TermWindow>
  </div>
  <p class="text-sm opacity-70 mt-2">Every push builds and tests your code automatically. A red pipeline blocks the merge.</p>
</div>

</div>

<div v-click="3" class="mt-6 text-center text-base opacity-85">
Push a branch → pipeline runs → merge the MR → <span class="text-green-600 dark:text-green-400 font-600">issue #42 closes itself</span>.
</div>

<!--
[click] Issues are GitLab's task tracker: each one has a title, labels like "bug" or priority, and an assignee; it is the shared to-do list, visible to the whole team
- when you branch to fix it, you write "Closes #42" in the commit or Merge Request description; GitLab then links that code to the issue, and closing the MR closes the issue automatically
[click] CI/CD is the automation: a small file, .gitlab-ci.yml, defines stages like build, test, deploy; GitLab runs them on every push, no one has to remember; if the tests fail, the pipeline goes red and the Merge Request is blocked from merging
[click] put together, the loop is tight: an issue describes the work, a branch and MR do it, the pipeline proves it works, and merging closes the issue; the whole trail is recorded
- keep it introductory today; the point is to know these exist and how they connect, not to write pipelines yet
-->
