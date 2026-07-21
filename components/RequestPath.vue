<!-- RequestPath — a request hops through service boxes (rounded rectangles). The packet rides a
     rail BELOW the boxes (never overlapping an icon); each box lights on arrival, the last returns
     200 OK. local = cyan, remote = blue. Click-staged off $clicks; page needs `clicks: <hops-1>`.
     For AWS / Cloudflare / networking flows.

     Optional `group` draws a fieldset-style zone behind hops [from..to] with a legend on its top
     border, for saying "these hops are all the same kind of thing" without spending a sentence.
     The zone makes the diagram taller, so the ungrouped geometry is left untouched. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import DiagIcon from './DiagIcon.vue'
import { hex } from './diagram-icons'

interface Hop { label: string; icon: string; color: string }
interface Group { from: number; to: number; label: string; at?: number }
const props = withDefaults(defineProps<{ hops?: Hop[]; group?: Group | null }>(), {
  hops: () => [
    { label: 'Browser', icon: 'laptop', color: 'cyan' },
    { label: 'DNS', icon: 'dns', color: 'blue' },
    { label: 'Load Balancer', icon: 'scale-balance', color: 'blue' },
    { label: 'EC2', icon: 'server', color: 'blue' },
  ],
  group: null,
})

const { $clicks } = useSlideContext()
const s = computed(() => $clicks.value)

const w = 136, h = 58, hw = 68, x0 = 92, step = 190
const cx = (i: number) => x0 + i * step
const last = computed(() => props.hops.length - 1)
const green = hex('green')

// The zone needs headroom above the boxes (legend) and below the rail (bottom border),
// so grouped diagrams sit 14px lower and run 14px taller.
const gr = computed(() => props.group)
const y = computed(() => (gr.value ? 40 : 26))
const railY = computed(() => (gr.value ? 126 : 112))
const vbH = computed(() => (gr.value ? 148 : 134))

const GPAD = 14, ZTOP = 28, ZR = 18
const zx0 = computed(() => cx(gr.value!.from) - hw - GPAD)
const zx1 = computed(() => cx(gr.value!.to) + hw + GPAD)
const zOn = computed(() => s.value >= (gr.value?.at ?? 1))
// Legend width is estimated from the glyph count — SVG text can't self-size, and this only has
// to size the gap in the border. Covering the border with a canvas-filled rect instead would
// paint a visible patch: --canvas is the component's box fill, not the slide's background.
const legW = computed(() => gr.value!.label.length * 5.7 + 18)
const legX = computed(() => (zx0.value + zx1.value) / 2)

// Rounded rect traced counterclockwise (so every corner sweeps 0), broken either side of the
// legend. Left open on purpose: fill closes the gap implicitly, stroke doesn't.
const zonePath = computed(() => {
  const a = zx0.value, b = zx1.value, t = ZTOP, u = vbH.value - 6, r = ZR
  const gL = legX.value - legW.value / 2, gR = legX.value + legW.value / 2
  return `M${gL} ${t} H${a + r} A${r} ${r} 0 0 0 ${a} ${t + r} V${u - r} A${r} ${r} 0 0 0 ${a + r} ${u}`
    + ` H${b - r} A${r} ${r} 0 0 0 ${b} ${u - r} V${t + r} A${r} ${r} 0 0 0 ${b - r} ${t} H${gR}`
})

const vbW = computed(() => Math.max(cx(last.value) + 78, gr.value ? zx1.value + 8 : 0))
const tokenPos = computed(() => [cx(Math.min(s.value, last.value)), railY.value])
</script>

<template>
  <svg class="dia rq" :viewBox="`0 0 ${vbW} ${vbH}`" :style="{ maxWidth: vbW + 'px' }">
    <!-- the grouping zone, behind everything: the rail crosses its border, so the packet is
         visibly outside the zone and then inside it -->
    <g v-if="gr" class="rq-zone" :class="{ on: zOn }">
      <path :d="zonePath" />
      <text class="rq-leg" :x="legX" :y="ZTOP + 4" text-anchor="middle">{{ gr.label }}</text>
    </g>
    <!-- the rail (drawn segment-by-segment as the packet advances) -->
    <path
      v-for="(hop, i) in hops.slice(1)" :key="'r' + i"
      class="wire" :class="{ 'is-drawn': s >= i + 1 }" :d="`M${cx(i)} ${railY} H${cx(i + 1)}`" stroke="var(--track)" pathLength="1"
    />
    <template v-for="(n, i) in hops" :key="i">
      <line class="rq-stub" :class="{ 'is-in': s >= i }" :x1="cx(i)" :y1="y + h" :x2="cx(i)" :y2="railY" :style="{ '--nc': hex(n.color) }" />
      <g class="rq-node" :class="{ 'is-in': s >= i }" :style="{ '--nc': hex(n.color) }">
        <rect :x="cx(i) - hw" :y="y" :width="w" :height="h" rx="14" />
        <DiagIcon :name="n.icon" :x="cx(i)" :y="y + 20" :size="26" />
        <text class="rq-lbl" :x="cx(i)" :y="y + 46" text-anchor="middle" style="font-size: 12.5px">{{ n.label }}</text>
      </g>
    </template>
    <!-- 200 OK badge above the last hop -->
    <g class="badge" :class="{ on: s >= last }" :transform="`translate(${cx(last) - 25},16)`">
      <rect x="0" y="-13" width="58" height="22" rx="11" :fill="green + '26'" :stroke="green" stroke-width="1.3" />
      <text x="29" y="3" text-anchor="middle" font-weight="700" :style="{ fill: green, fontSize: '11px' }">200 OK</text>
    </g>
    <!-- the travelling packet -->
    <g class="token" :transform="`translate(${tokenPos[0]},${tokenPos[1]})`">
      <circle class="glow" r="12" />
      <circle r="6.5" />
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

.wire { fill: none; stroke-width: 2.6; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset .6s ease; }
.wire.is-drawn { stroke-dashoffset: 0; }
.rq-node rect { fill: var(--canvas); stroke: var(--track); stroke-width: 2; transition: stroke .4s, fill .4s; }
.rq-node.is-in rect { stroke: var(--nc); fill: color-mix(in srgb, var(--nc) 12%, transparent); }
.rq-node { color: var(--track); transition: color .4s; }
.rq-node.is-in { color: var(--nc); }
.rq-node .rq-lbl { fill: var(--muted); transition: fill .4s; }
.rq-node.is-in .rq-lbl { fill: var(--ink); font-weight: 600; }
.rq-stub { stroke: var(--track); stroke-width: 1.8; opacity: 0; transition: opacity .4s, stroke .4s; }
.rq-stub.is-in { opacity: 1; stroke: var(--nc); }

.rq-zone { opacity: 0; transition: opacity .5s ease; }
.rq-zone.on { opacity: 1; }
.rq-zone path { fill: color-mix(in srgb, var(--track) 7%, transparent); stroke: var(--track); stroke-width: 1.5; stroke-dasharray: 5 4; }
.rq-zone .rq-leg { fill: var(--muted); font-size: 11px; }
.badge { opacity: 0; transition: opacity .45s ease; }
.badge.on { opacity: 1; }
.token { transition: transform .55s cubic-bezier(.45,0,.25,1); }
.token circle { fill: var(--cyan); }
.token .glow { fill: var(--cyan); opacity: .25; }
@media (prefers-reduced-motion: reduce) { .dia * { transition-duration: .01ms !important; } }
</style>
