<!-- Lab — the hands-on archetype for this workshop (the taster decks have no
     equivalent). Header = test-tube medallion + "LAB n" chip + title; a goal
     line; two columns (numbered steps left, a "your turn" TermWindow right via
     the #terminal slot); an optional caution strip. Steps live in the default
     slot as <li> items so each can carry its own v-click. -->
<script setup lang="ts">
defineProps<{ n: number | string; title: string; goal?: string; caution?: string }>()
</script>

<template>
  <div class="flex items-center gap-3 mb-1">
    <div class="medallion !w-11 !h-11 bg-red-500/10 flex-shrink-0">
      <mdi-test-tube class="text-2xl text-red-600 dark:text-red-400" />
    </div>
    <div>
      <div class="text-xs font-mono font-700 tracking-widest text-red-600 dark:text-red-400">LAB {{ n }}</div>
      <h3 class="!m-0 !leading-tight">{{ title }}</h3>
    </div>
  </div>

  <p v-if="goal" class="goal-chip mt-1 mb-4">
    <mdi-target class="text-red-600 dark:text-red-400" /> {{ goal }}
  </p>

  <div class="grid grid-cols-2 gap-8 items-start">
    <ol class="list-none p-0 m-0 space-y-3">
      <slot />
    </ol>
    <div class="term-print">
      <slot name="terminal" />
    </div>
  </div>

  <div v-if="caution" class="caution mt-5 flex items-start gap-2">
    <mdi-alert class="flex-shrink-0 mt-0.5" /> <span>{{ caution }}</span>
  </div>
</template>
