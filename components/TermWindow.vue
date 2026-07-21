<!-- TermWindow — a macOS-style terminal window frame for demo signpost slides.
     Put monospace content in the default slot; `title` names the fake tab. -->
<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'terminal' })
</script>

<template>
  <div class="rounded-xl overflow-hidden border border-gray-700/60 shadow-lg bg-[#0d1117] text-left">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-[#161b22] border-b border-gray-700/60">
      <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
      <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
      <span class="ml-3 text-xs text-gray-400 font-mono">{{ title }}</span>
    </div>
    <div class="px-5 py-4 font-mono text-sm leading-relaxed text-gray-200">
      <slot />
    </div>
  </div>
</template>
