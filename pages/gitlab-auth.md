---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-1">
  <LiveBadge />
  <h3 class="!m-0">Sign in to GitLab Selangor</h3>
</div>

<p class="text-sm opacity-70 mt-1 mb-4">SSH is turned off here, so we clone over <b>HTTPS</b> and use a <b>Personal Access Token</b> (PAT) as the password.</p>

<div class="grid grid-cols-2 gap-8 items-start">

<div class="pop space-y-2">
  <p class="text-xs font-mono font-700 uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">Create the token — once, in the browser</p>
  <div v-click="1" class="step-row items-start"><span class="step-num">1</span><span>GitLab → your avatar → <b>Edit profile</b> → <b>Access Tokens</b>.</span></div>
  <div v-click="2" class="step-row items-start"><span class="step-num">2</span><span>Name it, set an expiry date.</span></div>
  <div v-click="3" class="step-row items-start"><span class="step-num">3</span><span>Tick scopes: <code>read_repository</code> + <code>write_repository</code>.</span></div>
  <div v-click="4" class="step-row items-start"><span class="step-num">4</span><span><b>Create</b>, then <b>copy the token now</b> — it's shown only once.</span></div>
</div>

<div class="space-y-3">
  <div v-click="5" class="term-print">
  <TermWindow title="use it when Git asks">
    <div class="break-all"><span class="text-green-400">$</span> git clone https://git.selangor.gov.my/training/practice.git</div>
    <div class="text-gray-400">Username: <span class="text-gray-200">your.gitlab.username</span></div>
    <div class="text-gray-400">Password: <span class="text-gray-200">paste the token</span> <span class="opacity-60">(not your login password)</span></div>
  </TermWindow>
  </div>
  <div v-click="6" class="term-print">
  <TermWindow title="remember it (optional)">
    <div><span class="text-green-400">$</span> git config --global credential.helper store</div>
    <div class="text-gray-500 text-xs"># enter the token once; Git reuses it after</div>
  </TermWindow>
  </div>
</div>

</div>

<div v-click="7" class="mt-4 flex items-center justify-center gap-2 caution text-base">
  <mdi-alert /> Copy the token the moment it appears — you can't view it again, only regenerate.
</div>

<!--
- because SSH is disabled on the state server, the git@ style address will not work; everything goes over HTTPS, and the password Git asks for is a Personal Access Token, not your normal login
[click] in GitLab, open your avatar menu, Edit profile, then Access Tokens in the sidebar
[click] give it a clear name like "training" and an expiry, a month is plenty for today
[click] tick two scopes: read_repository to clone, and write_repository to push; those two are all we need
[click] click Create, and copy the token immediately; GitLab shows it once and never again
[click] then clone over HTTPS; when Git asks for a username, it is your GitLab username, and for the password you paste the token
[click] optional but handy: credential.helper store makes Git remember the token so you only type it once today; fine for a training token, and you can clear it later
[click] the one trap: if you navigate away before copying, the token is gone; you just make a new one, no harm done
- PREP: confirm the exact Access Tokens path on the state GitLab version, and whether personal tokens are enabled for participant accounts; if they are restricted, hand out project deploy tokens or pre-made credentials instead
-->
