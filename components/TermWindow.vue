<!-- TermWindow — a macOS-style terminal window frame for demo signpost slides.
     Put monospace content in the default slot; `title` names the fake tab.
     A copy button in the header copies the body's commands to the clipboard,
     stripping the leading "$ " prompt so what you paste is runnable. -->
<script setup lang="ts">
import { ref } from 'vue'
withDefaults(defineProps<{ title?: string }>(), { title: 'terminal' })
const bodyRef = ref<HTMLElement | null>(null)
const copied = ref(false)
async function copyCmds() {
  const raw = bodyRef.value?.innerText || ''
  // strip the shell prompt so pasted text is runnable; keep comments/output
  const text = raw.split('\n').map((l) => l.replace(/^\s*\$\s?/, '')).join('\n').trim()
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand('copy') } catch { /* ignore */ }
    document.body.removeChild(ta)
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}
</script>

<template>
  <div class="rounded-xl overflow-hidden border border-gray-700/60 shadow-lg bg-[#0d1117] text-left">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-[#161b22] border-b border-gray-700/60">
      <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
      <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
      <span class="ml-3 text-xs text-gray-400 font-mono">{{ title }}</span>
      <button type="button" class="tw-copy ml-auto" @click.stop="copyCmds" :aria-label="copied ? 'Copied' : 'Copy commands'">
        <mdi-check v-if="copied" class="text-green-400" />
        <mdi-content-copy v-else />
        <span class="tw-copy-label">{{ copied ? 'copied' : 'copy' }}</span>
      </button>
    </div>
    <div ref="bodyRef" class="px-5 py-4 font-mono text-sm leading-relaxed text-gray-200">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tw-copy {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: #8b949e;
  font-size: 0.72rem;
  font-family: inherit;
  padding: 0.1rem 0.45rem;
  border-radius: 0.35rem;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
  pointer-events: auto;
}
.tw-copy:hover { color: #e6edf3; background: rgba(255, 255, 255, 0.07); }
.tw-copy-label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  font-size: 0.58rem;
}
</style>
