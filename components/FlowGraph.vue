<!-- FlowGraph — the general flowchart LR replacement. Nodes carry a shape (stadium = command,
     diamond = decision, rect = entity, cylinder = store, hexagon = process) + MDI icon + label;
     edges carry an optional command label + arrowhead; optional group boxes wrap subgraphs.
     Builds step-by-step off $clicks (each node/edge has an `at` click index). Node positions are
     explicit (deterministic, unlike mermaid auto-layout). Page needs `clicks: <max at>`.
     Defaults render the `docker run` anatomy. Also draws command chains, compose-up, state
     machines (add a loop edge) and grouped overviews (pass `groups`). -->
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import DiagIcon from './DiagIcon.vue'
import { hex } from './diagram-icons'

interface Node { shape: string; cx: number; cy: number; w: number; h: number; icon: string; label: string | string[]; color: string; at: number }
interface Edge { d: string; ax: number; ay: number; adeg: number; at: number; label?: string; lx?: number; ly?: number; lw?: number; lc?: string }
interface Group { label: string; x: number; y: number; w: number; h: number; at: number }
const props = withDefaults(defineProps<{ nodes?: Node[]; edges?: Edge[]; groups?: Group[]; width?: number; height?: number }>(), {
  width: 826,
  height: 176,
  groups: () => [],
  nodes: () => [
    { shape: 'stadium', cx: 92, cy: 105, w: 158, h: 50, icon: 'console-line', color: 'purple', label: 'docker run nginx', at: 0 },
    { shape: 'diamond', cx: 300, cy: 105, w: 132, h: 96, icon: 'help-circle-outline', color: 'amber', label: ['Local copy?'], at: 1 },
    { shape: 'rect', cx: 480, cy: 50, w: 132, h: 46, icon: 'download', color: 'blue', label: 'fetch', at: 2 },
    { shape: 'rect', cx: 600, cy: 120, w: 150, h: 46, icon: 'cube-outline', color: 'green', label: 'Create', at: 3 },
    { shape: 'rect', cx: 748, cy: 120, w: 110, h: 46, icon: 'play', color: 'green', label: 'Run', at: 4 },
  ],
  edges: () => [
    { at: 1, d: 'M171 105 H229', ax: 229, ay: 105, adeg: 0 },
    { at: 2, d: 'M300 60 C 345 52, 385 50, 412 50', ax: 412, ay: 50, adeg: 0, lx: 352, ly: 40, lw: 40, label: 'No', lc: 'amber' },
    { at: 3, d: 'M480 73 C 512 100, 518 108, 536 112', ax: 536, ay: 112, adeg: 30 },
    { at: 3, d: 'M366 105 C 440 105, 470 116, 523 118', ax: 523, ay: 118, adeg: 14, lx: 452, ly: 112, lw: 34, label: 'Yes', lc: 'green' },
    { at: 4, d: 'M675 120 H693', ax: 693, ay: 120, adeg: 0 },
  ],
})

const { $clicks } = useSlideContext()
const s = computed(() => $clicks.value)

const centered = (shape: string) => shape === 'diamond' || shape === 'hexagon' || shape === 'cylinder'
const asLines = (l: string | string[]) => Array.isArray(l) ? l : [l]
const x0 = (n: Node) => n.cx - n.w / 2
const y0 = (n: Node) => n.cy - n.h / 2
const diamondPts = (n: Node) => `${n.cx},${y0(n)} ${x0(n) + n.w},${n.cy} ${n.cx},${y0(n) + n.h} ${x0(n)},${n.cy}`
const hexPts = (n: Node) => { const o = n.h * 0.38, x = x0(n), y = y0(n); return `${x + o},${y} ${x + n.w - o},${y} ${x + n.w},${n.cy} ${x + n.w - o},${y + n.h} ${x + o},${y + n.h} ${x},${n.cy}` }
const cylBody = (n: Node) => { const rx = n.w / 2, ry = 7, x = x0(n), y = y0(n); return `M${x} ${y + ry} a${rx} ${ry} 0 0 0 ${n.w} 0 v${n.h - 2 * ry} a${rx} ${ry} 0 0 1 ${-n.w} 0 z` }
const cylTop = (n: Node) => { const rx = n.w / 2, ry = 7, x = x0(n), y = y0(n); return `M${x} ${y + ry} a${rx} ${ry} 0 0 1 ${n.w} 0` }
</script>

<template>
  <svg class="dia fg" :viewBox="`0 0 ${width} ${height}`" :style="{ maxWidth: width + 'px' }">
    <!-- group boxes (behind) -->
    <g v-for="(g, i) in groups" :key="'g' + i" class="fg-group" :class="{ 'is-in': s >= g.at }">
      <rect :x="g.x" :y="g.y" :width="g.w" :height="g.h" rx="12" />
      <text class="fg-group-lbl" :x="g.x + 12" :y="g.y + 18" font-weight="700" style="font-size: 12px">{{ g.label }}</text>
    </g>
    <!-- edges -->
    <template v-for="(e, i) in edges" :key="'e' + i">
      <path class="fg-edge" :class="{ 'is-drawn': s >= e.at }" :d="e.d" pathLength="1" />
      <path class="fg-arrow" :class="{ 'is-drawn': s >= e.at }" :transform="`translate(${e.ax},${e.ay}) rotate(${e.adeg})`" d="M-7,-4.5 L1.5,0 L-7,4.5 Z" />
      <g v-if="e.label" class="fg-elabel" :class="{ 'is-drawn': s >= e.at }">
        <rect :x="e.lx! - e.lw! / 2" :y="e.ly! - 9" :width="e.lw" height="18" rx="9" />
        <text :x="e.lx" :y="e.ly! + 4" text-anchor="middle" font-weight="700" :style="{ fill: hex(e.lc), fontSize: '11px' }">{{ e.label }}</text>
      </g>
    </template>
    <!-- nodes -->
    <g v-for="(n, i) in nodes" :key="'n' + i" class="fg-node" :class="{ 'is-in': s >= n.at }" :style="{ '--nc': hex(n.color) }">
      <rect v-if="n.shape === 'stadium' || n.shape === 'rect'" class="fg-shape" :x="x0(n)" :y="y0(n)" :width="n.w" :height="n.h" :rx="n.shape === 'stadium' ? n.h / 2 : 11" />
      <polygon v-else-if="n.shape === 'diamond'" class="fg-shape" :points="diamondPts(n)" />
      <polygon v-else-if="n.shape === 'hexagon'" class="fg-shape" :points="hexPts(n)" />
      <template v-else-if="n.shape === 'cylinder'">
        <path class="fg-shape" :d="cylBody(n)" />
        <path class="fg-cyltop" :d="cylTop(n)" fill="none" />
      </template>
      <template v-if="centered(n.shape)">
        <DiagIcon :name="n.icon" :x="n.cx" :y="n.cy + (n.shape === 'cylinder' ? -6 : -13)" :size="18" />
        <text v-for="(t, li) in asLines(n.label)" :key="li" class="fg-lbl" :x="n.cx" :y="n.cy + (n.shape === 'cylinder' ? 12 : 7) + li * 13" text-anchor="middle" style="font-size: 11.5px">{{ t }}</text>
      </template>
      <template v-else>
        <DiagIcon :name="n.icon" :x="x0(n) + 22" :y="n.cy" :size="22" />
        <text class="fg-lbl" :x="x0(n) + 40" :y="n.cy + 4.5" text-anchor="start" style="font-size: 13.5px">{{ asLines(n.label)[0] }}</text>
      </template>
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
.dia { display: block; width: 100%; height: auto; margin: 0 auto; user-select: none; }
.dia text { fill: var(--ink); font-size: 12px; font-family: inherit; }

.fg-node { color: var(--nc); opacity: 0; transform: translateY(10px); transition: opacity .45s ease, transform .45s cubic-bezier(.4,0,.2,1); }
.fg-node.is-in { opacity: 1; transform: none; }
.fg-shape { fill: color-mix(in srgb, var(--nc) 13%, transparent); stroke: var(--nc); stroke-width: 2; }
.fg-cyltop { fill: none; stroke: var(--nc); stroke-width: 2; }
.fg-node .fg-lbl { fill: var(--nc); font-weight: 700; }
.fg-edge { fill: none; stroke: var(--track); stroke-width: 2.4; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset .55s ease; }
.fg-edge.is-drawn { stroke-dashoffset: 0; }
.fg-arrow { fill: var(--track); opacity: 0; transition: opacity .3s .3s; }
.fg-arrow.is-drawn { opacity: 1; }
.fg-elabel { opacity: 0; transition: opacity .3s .25s; }
.fg-elabel.is-drawn { opacity: 1; }
.fg-elabel rect { fill: var(--canvas); stroke: var(--track); stroke-width: 1; }
.fg-group { opacity: 0; transition: opacity .5s ease; }
.fg-group.is-in { opacity: 1; }
.fg-group rect { fill: none; stroke: var(--muted); stroke-width: 1.4; stroke-dasharray: 5 4; }
.fg-group .fg-group-lbl { fill: var(--muted); font-weight: 700; }
@media (prefers-reduced-motion: reduce) { .dia * { transition-duration: .01ms !important; } }
</style>
