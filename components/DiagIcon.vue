<!-- Renders one MDI icon inside an SVG diagram at (x,y), coloured by the inherited CSS `color`
     (currentColor). Used by every diagram component so icon handling stays in one place. -->
<script setup lang="ts">
import { MDI } from './diagram-icons'
const props = withDefaults(defineProps<{ name: string; x: number; y: number; size?: number }>(), { size: 24 })
</script>

<template>
  <svg :x="x - size / 2" :y="y - size / 2" :width="size" :height="size" viewBox="0 0 24 24">
    <path :d="MDI[name]" fill="currentColor" />
  </svg>
</template>
