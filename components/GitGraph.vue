<!-- GitGraph — commit DAG: dots pop in, branch + merge curves draw on, and a pulsing HEAD
     pointer marks the current commit and glides when it moves (revert / checkout / going back).
     Click-staged off $clicks. Page frontmatter needs `clicks: <number of steps>`.
     Replaces mermaid `gitGraph`. Defaults show a feature-branch merge then a revert. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { hex } from './diagram-icons'

interface Commit { id: string; x: number; y: number; color: string; at: number }
interface Wire { d: string; color: string; at: number }
const props = withDefaults(defineProps<{
  commits?: Commit[]; wires?: Wire[]; head?: [number, number][]; labels?: { text: string; x: number; y: number; color: string; at: number }[]
}>(), {
  commits: () => {
    const b = hex('blue'), p = hex('purple'), g = hex('green')
    return [
      { id: 'init', x: 90, y: 175, color: b, at: 0 },
      { id: 'nota', x: 200, y: 175, color: b, at: 1 },
      { id: 'fix', x: 300, y: 85, color: p, at: 2 },
      { id: 'edit', x: 330, y: 175, color: b, at: 3 },
      { id: 'merge', x: 450, y: 175, color: g, at: 4 },
    ]
  },
  wires: () => {
    const b = hex('blue'), p = hex('purple'), g = hex('green')
    return [
      { d: 'M40 175 H90', color: b, at: 0 },
      { d: 'M90 175 H200', color: b, at: 1 },
      { d: 'M200 175 H330', color: b, at: 3 },
      { d: 'M330 175 H450', color: b, at: 4 },
      { d: 'M200 175 C 240 175,260 85,300 85', color: p, at: 2 },
      { d: 'M300 85 C 360 85,400 175,450 175', color: g, at: 4 },
    ]
  },
  labels: () => [
    { text: 'main', x: 40, y: 162, color: hex('blue'), at: 0 },
    { text: 'feature', x: 242, y: 66, color: hex('purple'), at: 2 },
  ],
  head: () => [[90, 175], [200, 175], [300, 85], [330, 175], [450, 175], [330, 175]],
})

const { $clicks } = useSlideContext()
const s = computed(() => $clicks.value)
const headPos = computed(() => props.head[Math.min(s.value, props.head.length - 1)])
</script>

<template>
  <svg class="dia gg" viewBox="0 0 500 250" :style="{ maxWidth: '500px' }">
    <path
      v-for="(w, i) in wires" :key="'w' + i"
      class="wire" :class="{ 'is-drawn': s >= w.at }" :d="w.d" :stroke="w.color" pathLength="1"
    />
    <text
      v-for="(l, i) in labels" :key="'l' + i"
      class="lbl" :class="{ 'is-in': s >= l.at }" :x="l.x" :y="l.y"
      :text-anchor="l.text === 'main' ? 'start' : 'middle'" font-weight="700"
      :style="{ fill: l.color, fontSize: '12.5px' }"
    >{{ l.text }}</text>
    <g v-for="(k, i) in commits" :key="'c' + i" class="commit" :class="{ 'is-in': s >= k.at }">
      <circle :cx="k.x" :cy="k.y" r="9" :fill="k.color" />
      <text class="cid" :x="k.x" :y="k.y + (k.y < 130 ? 24 : 26)" text-anchor="middle" font-weight="600" :style="{ fill: k.color }">{{ k.id }}</text>
    </g>
    <!-- pulsing HEAD pointer -->
    <g class="ghead" :transform="`translate(${headPos[0]},${headPos[1]})`">
      <circle class="ghead-halo" r="14" />
      <circle class="ghead-ring" r="14" />
      <g class="ghead-tag" transform="translate(0,-27)">
        <rect x="-20" y="-9.5" width="40" height="19" rx="5" />
        <text x="0" y="4" text-anchor="middle" font-weight="800" style="font-size: 10px">HEAD</text>
      </g>
    </g>
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
.dia { --cyan: #06b6d4; display: block; width: 100%; height: auto; margin: 0 auto; user-select: none; }
.dia text { fill: var(--ink); font-size: 12.5px; font-family: inherit; }
.gg .cid { font-size: 11px; }

.wire { fill: none; stroke-width: 2.6; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset .6s ease; }
.wire.is-drawn { stroke-dashoffset: 0; }
.lbl { opacity: 0; transform: translateY(11px); transition: opacity .5s ease, transform .5s cubic-bezier(.4,0,.2,1); }
.lbl.is-in { opacity: 1; transform: none; }
.commit { opacity: 0; transform: scale(.3); transform-box: fill-box; transform-origin: center; transition: opacity .35s, transform .4s cubic-bezier(.34,1.56,.64,1); }
.commit.is-in { opacity: 1; transform: none; }
.commit > circle { stroke: var(--canvas); stroke-width: 2.5; }

.ghead { transition: transform .55s cubic-bezier(.45,0,.25,1); }
.ghead-ring { fill: none; stroke: var(--cyan); stroke-width: 2.5; }
.ghead-halo { fill: none; stroke: var(--cyan); stroke-width: 2.5; transform-box: fill-box; transform-origin: center; animation: headpulse 1.8s ease-out infinite; }
.ghead-tag rect { fill: var(--cyan); }
.ghead-tag text { fill: #fff; }
@keyframes headpulse { 0% { transform: scale(.85); opacity: .85; } 70% { transform: scale(1.75); opacity: 0; } 100% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .ghead-halo { animation: none; opacity: 0; } .dia * { transition-duration: .01ms !important; } }
</style>
