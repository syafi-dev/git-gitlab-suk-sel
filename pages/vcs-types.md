---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; git core refresher</p>

### Centralized vs distributed

<div class="grid grid-cols-2 gap-10 mt-1 items-start">

<div v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 120 } }">
  <p class="text-center font-700 text-blue-600 dark:text-blue-400 mb-1">Centralized (CVCS)</p>
  <svg viewBox="0 0 260 180" class="w-full max-w-[240px] mx-auto block">
    <g stroke="#94a3b8" stroke-width="1.6">
      <line x1="52" y1="140" x2="122" y2="58"/>
      <line x1="130" y1="140" x2="130" y2="58"/>
      <line x1="208" y1="140" x2="138" y2="58"/>
    </g>
    <g style="color:#2563eb">
      <circle cx="130" cy="40" r="24" fill="#2563eb22" stroke="currentColor" stroke-width="2"/>
      <DiagIcon name="server" :x="130" :y="40" :size="22"/>
    </g>
    <text x="130" y="82" text-anchor="middle" class="vlbl" style="font-size:8.5px" fill="#64748b" font-weight="700">the only full history</text>
    <g style="color:#0891b2">
      <circle cx="45" cy="150" r="17" fill="#06b6d422" stroke="currentColor" stroke-width="1.6"/><DiagIcon name="laptop" :x="45" :y="150" :size="16"/>
      <circle cx="130" cy="150" r="17" fill="#06b6d422" stroke="currentColor" stroke-width="1.6"/><DiagIcon name="laptop" :x="130" :y="150" :size="16"/>
      <circle cx="215" cy="150" r="17" fill="#06b6d422" stroke="currentColor" stroke-width="1.6"/><DiagIcon name="laptop" :x="215" :y="150" :size="16"/>
    </g>
    <text x="130" y="176" text-anchor="middle" class="vlbl" style="font-size:8.5px" fill="#64748b">clients hold a checkout only</text>
  </svg>
  <div v-click="1" class="mt-1 text-sm opacity-75 space-y-0.5">
    <p class="m-0">· One server owns the history.</p>
    <p class="m-0">· Server down or offline → you're stuck.</p>
    <p class="m-0 text-xs opacity-70">SVN · CVS · Perforce</p>
  </div>
</div>

<div v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 120 } }">
  <p class="text-center font-700 text-purple-600 dark:text-purple-400 mb-1">Distributed (DVCS)</p>
  <svg viewBox="0 0 260 180" class="w-full max-w-[240px] mx-auto block">
    <g stroke="#94a3b8" stroke-width="1.6">
      <line x1="130" y1="52" x2="52" y2="140"/>
      <line x1="130" y1="52" x2="208" y2="140"/>
      <line x1="62" y1="150" x2="198" y2="150"/>
    </g>
    <g style="color:#7c3aed">
      <circle cx="130" cy="42" r="21" fill="#7c3aed22" stroke="currentColor" stroke-width="2"/><DiagIcon name="laptop" :x="130" :y="42" :size="18"/>
      <circle cx="45" cy="150" r="21" fill="#7c3aed22" stroke="currentColor" stroke-width="2"/><DiagIcon name="laptop" :x="45" :y="150" :size="18"/>
      <circle cx="215" cy="150" r="21" fill="#7c3aed22" stroke="currentColor" stroke-width="2"/><DiagIcon name="laptop" :x="215" :y="150" :size="18"/>
    </g>
    <text x="130" y="112" text-anchor="middle" class="vlbl" style="font-size:8.5px" fill="#16a34a" font-weight="700">every node = full history</text>
  </svg>
  <div v-click="2" class="mt-1 text-sm opacity-75 space-y-0.5">
    <p class="m-0">· Every clone is a full copy, history and all.</p>
    <p class="m-0">· Commit &amp; work offline; sync when ready.</p>
    <p class="m-0 text-xs opacity-70">Git · Mercurial</p>
  </div>
</div>

</div>

<div v-click="3" class="mt-2 text-center text-base opacity-85">
Git is <span class="text-purple-600 dark:text-purple-400 font-600">distributed</span> — every clone is a complete backup.
</div>

<!--
- one big split separates the VCS family: where the history lives
[click] centralized, like SVN and CVS: a single server holds the whole history; your machine only has a checkout, the current files; if that server is down or you are offline, you cannot commit or see history
[click] distributed, like Git: when you clone, you get the entire repository, every commit ever made; you commit locally, work on the plane, and sync with the server only when you choose
[click] this is why Git feels fast and resilient: nothing needs the network for everyday work, and every teammate's laptop is a full backup of the project
- gloss: centralized is a library where one building holds every book; distributed gives everyone their own full copy of the whole library
-->

<style>
/* Halo behind the in-diagram SVG labels so they stay readable where they
   cross the connector lines. Stroke (drawn under the fill via paint-order)
   is painted in the slide background colour, per light/dark scheme. */
text.vlbl {
  paint-order: stroke;
  stroke: #ffffff;
  stroke-width: 3px;
  stroke-linejoin: round;
}
html.dark text.vlbl { stroke: #0b0b0b; }
</style>
