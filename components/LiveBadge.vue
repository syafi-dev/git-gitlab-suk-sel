<!-- LiveBadge — the pulsing "LIVE DEMO" pill that marks every slide where the
     trainer switches to a real terminal. One look = screen change incoming. -->
<template>
  <span class="live-badge font-mono">
    <span class="live-dot" />
    live demo
  </span>
</template>

<style scoped>
.live-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.22rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid #dc2626;
  color: #dc2626;
  background: rgb(220 38 38 / 0.08);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
}
html.dark .live-badge {
  color: #f87171;
  border-color: #f87171;
}
.live-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: currentColor;
  animation: live-pulse 1.6s ease-in-out infinite;
}
@keyframes live-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@media (prefers-reduced-motion: reduce) {
  .live-dot { animation: none; }
}
</style>
