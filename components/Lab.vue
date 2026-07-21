<!-- Lab — the hands-on archetype for this workshop (the taster decks have no
     equivalent). Header = test-tube medallion + "LAB n" chip + title + the
     "your turn" ActivityBadge; a SETUP line (prerequisites: which repo, solo
     vs pair, whether it continues from the last lab); a GOAL line; two columns
     (numbered steps left, a "your turn" TermWindow right via the #terminal
     slot); an optional caution strip. Steps live in the default slot as <li>.
     Spacing is deliberately tight: five two-line steps plus setup/goal/caution
     must all clear the fixed footer. -->
<script setup lang="ts">
defineProps<{ n: number | string; title: string; prep?: string; goal?: string; caution?: string }>()
</script>

<template>
  <div class="flex items-center gap-3 mb-1">
    <div class="medallion !w-10 !h-10 bg-red-500/10 flex-shrink-0">
      <mdi-test-tube class="text-xl text-red-600 dark:text-red-400" />
    </div>
    <div class="flex-1">
      <div class="text-xs font-mono font-700 tracking-widest text-red-600 dark:text-red-400">LAB {{ n }}</div>
      <h3 class="!m-0 !leading-tight !text-xl">{{ title }}</h3>
    </div>
    <ActivityBadge class="flex-shrink-0" />
  </div>

  <div class="mt-1 mb-2.5 space-y-1">
    <p v-if="prep" class="flex items-start gap-1.5 text-[0.78rem] leading-snug text-cyan-700 dark:text-cyan-300 m-0">
      <mdi-wrench-outline class="flex-shrink-0 mt-0.5" />
      <span><span class="font-mono font-700 uppercase tracking-wider text-[0.6rem] opacity-80">Setup</span> · {{ prep }}</span>
    </p>
    <p v-if="goal" class="flex items-start gap-1.5 text-[0.8rem] leading-snug opacity-85 m-0">
      <mdi-target class="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
      <span><span class="font-mono font-700 uppercase tracking-wider text-[0.6rem] opacity-70">Goal</span> · {{ goal }}</span>
    </p>
  </div>

  <div class="grid grid-cols-2 gap-x-8 items-start">
    <ol class="list-none p-0 m-0 space-y-1.5 text-[0.92rem] leading-snug">
      <slot />
    </ol>
    <div class="term-print text-[0.82rem]">
      <slot name="terminal" />
    </div>
  </div>

  <div v-if="caution" class="caution mt-2.5 flex items-start gap-2">
    <mdi-alert class="flex-shrink-0 mt-0.5" /> <span>{{ caution }}</span>
  </div>
</template>
