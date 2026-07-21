<!-- LayerStack — animated stack of labelled bars, revealed top-to-bottom one click at a time.
     Trimmed from the bootcamp's Dockerfile-layers component (cache badges removed) into a
     generic stack diagram. Click-staged off $clicks. Page frontmatter needs
     `clicks: <layers.length - 1>`. Defaults render the Linux system stack. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import DiagIcon from './DiagIcon.vue'
import { hex } from './diagram-icons'

interface Layer { ins: string; sub?: string; icon: string; color: string }
const props = withDefaults(defineProps<{ layers?: Layer[] }>(), {
  layers: () => [
    { ins: 'Your apps', sub: 'browser · editor · server', icon: 'application-outline', color: 'green' },
    { ins: 'Shell + terminal', sub: 'where you type commands', icon: 'console-line', color: 'amber' },
    { ins: 'Linux kernel', sub: 'the core that runs it all', icon: 'penguin', color: 'blue' },
    { ins: 'Hardware', sub: 'CPU · memory · disk · network', icon: 'memory', color: 'slate' },
  ],
})

const { $clicks } = useSlideContext()
const s = computed(() => $clicks.value)

const bx = 40, bw = 400, bh = 52, topY = 12, gap = 62
const yOf = (i: number) => topY + i * gap
const vbH = computed(() => yOf(props.layers.length - 1) + bh + 14)
</script>

<template>
  <svg class="dia ls" :viewBox="`0 0 480 ${vbH}`" :style="{ maxWidth: '480px' }">
    <template v-for="(l, i) in layers" :key="i">
      <g class="node" :class="{ 'is-in': s >= i }" :style="{ '--nc': hex(l.color) }">
        <rect class="bar" :x="bx" :y="yOf(i)" :width="bw" :height="bh" rx="10" />
        <rect :x="bx" :y="yOf(i)" width="5.5" :height="bh" rx="2.6" :fill="hex(l.color)" stroke="none" />
        <DiagIcon :name="l.icon" :x="bx + 30" :y="yOf(i) + bh / 2" :size="24" />
        <text :x="bx + 54" :y="yOf(i) + bh / 2 + (l.sub ? -3 : 4.5)" font-weight="700" style="font-size: 14px">{{ l.ins }}</text>
        <text v-if="l.sub" class="sub" :x="bx + 54" :y="yOf(i) + bh / 2 + 15" style="font-size: 11px">{{ l.sub }}</text>
      </g>
    </template>
  </svg>
</template>

<!-- Palette lives in an UNSCOPED block: scoped `:global(.dark)` never matches at runtime
     (html.dark is outside the component's scope attribute), which left dark mode on the
     light palette — dark-navy labels on a black slide. -->
<style>
.dia { --canvas: #fff; --ink: #1c2430; --muted: #7b8798; --track: #aab6c4; }
html.dark .dia { --canvas: #0f151d; --ink: #dbe3ee; --muted: #97a3b4; --track: #4a5a6b; }
</style>

<style scoped>
.dia { display: block; width: 100%; height: auto; margin: 0 auto; user-select: none; }
.dia text { fill: var(--ink); font-family: inherit; }
.dia .sub { fill: var(--muted); }

.node { color: var(--nc); opacity: 0; transform: translateY(11px); transition: opacity .5s ease, transform .5s cubic-bezier(.4,0,.2,1); }
.node.is-in { opacity: 1; transform: none; }
.node .bar { fill: color-mix(in srgb, var(--nc) 13%, transparent); stroke: var(--nc); stroke-width: 2; }
@media (prefers-reduced-motion: reduce) { .dia * { transition-duration: .01ms !important; } }
</style>
