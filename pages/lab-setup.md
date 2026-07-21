---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-1">
  <ActivityBadge />
  <h3 class="!m-0">How the labs work</h3>
</div>

<p class="text-sm opacity-60 mt-1 mb-5">Every lab tells you its <span class="font-mono text-cyan-700 dark:text-cyan-300 font-700 text-xs uppercase tracking-wider">setup</span> up front — which repo, and solo or pair.</p>

<div class="grid grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">

<div v-click="1" class="note-row items-start">
  <mdi-source-repository class="note-ico text-blue-600 dark:text-blue-400" />
  <p><b>One shared repo</b> · already created for you, and you're a member. Clone over <b>HTTPS</b> with your token.<br><a href="https://git.selangor.gov.my" target="_blank">git.selangor.gov.my</a><span class="opacity-60">/training/practice</span></p>
</div>

<div v-click="2" class="note-row items-start">
  <mdi-account class="note-ico text-green-600 dark:text-green-400" />
  <p><b>Solo labs</b> · work in your own clone, on your own branch <code>feature/&lt;name&gt;</code> — no clash with anyone.</p>
</div>

<div v-click="3" class="note-row items-start">
  <mdi-account-multiple class="note-ico text-purple-600 dark:text-purple-400" />
  <p><b>Pair labs</b> (5–7) · pair up by seat. The conflict is made on <b>one shared branch</b> (e.g. <code>pair-03</code>) in the same repo.</p>
</div>

<div v-click="4" class="note-row items-start">
  <mdi-shield-check-outline class="note-ico text-amber-600 dark:text-amber-400" />
  <p><b>Safe to break</b> · everything builds on your Lab 1 clone. The undo drills (Labs 2 &amp; 8) are all local — they can't affect anyone.</p>
</div>

</div>

<div v-click="5" class="mt-6 text-center text-base opacity-80">
Read the <span class="font-mono text-cyan-700 dark:text-cyan-300 font-700 text-xs uppercase tracking-wider">setup</span> line first, then start typing.
</div>

<!--
- before the first lab, the ground rules, so nobody is stranded wondering what to clone or who to pair with
[click] there is one shared training repo I set up on GitLab Selangor; you are all added as Developers, so you can push; the address is on the slide and on the setup sheet
[click] for the solo labs you each work in your own clone, on your own branch named after you; because branches are private lines, twenty people never collide
[click] three labs are in pairs: the conflict lab and the two Merge Request labs; pair with your neighbour; for the conflict we both push to one shared branch like pair-03, so it is obvious whose branch we are fighting over
[click] and it is safe: everything continues from the clone you make in Lab 1, and the pure-undo labs are entirely local, so you can break things freely and bring them back
[click] every lab slide starts with a SETUP line stating exactly this, so glance there first
- PREP: create training/practice on GitLab Selangor, seed a README with a team-list section, add all participants as Developers, protect main if you want MRs enforced; pre-number the pairs by seat
-->
