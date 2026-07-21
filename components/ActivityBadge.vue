<!-- ActivityBadge — the green "your turn" pill that marks every slide where the
     audience does something themselves (labs, the warm-up). The green/hand pairing
     reads as "you act now", distinct from the red LiveBadge ("watch the trainer"). -->
<template>
  <span class="act-badge font-mono">
    <mdi-hand-back-right class="act-hand" />
    your turn
  </span>
</template>

<style scoped>
.act-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.22rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid #16a34a;
  color: #16a34a;
  background: rgb(22 163 74 / 0.08);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
}
html.dark .act-badge {
  color: #4ade80;
  border-color: #4ade80;
}
.act-hand {
  font-size: 0.8rem;
  animation: act-wave 1.6s ease-in-out infinite;
  transform-origin: 70% 80%;
}
@keyframes act-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
@media (prefers-reduced-motion: reduce) {
  .act-hand { animation: none; }
}
</style>
