<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="deck-footer fixed bottom-0 left-0 right-0 flex items-center justify-between px-3 py-1.5 bg-black/40 backdrop-blur-sm">
    <div class="flex items-center gap-2">
      <img :src="`${base}suk-logo.png`" alt="SUK Selangor" class="h-4 object-contain" />
      <div class="footer-text">
        Git &amp; GitLab · 1-Day Refresher Workshop
      </div>
    </div>
    <div class="footer-text">
      Prepared for SUK Selangor ·
      <a href="https://github.com/syafi-dev" target="_blank" class="footer-link">Syafiyullah Yahya</a>
    </div>
  </div>
</template>

<style scoped>
div { pointer-events: none; }
.footer-text {
  font-size: 0.6rem;
  line-height: 1.2;
  color: white;
  opacity: 0.9;
}
.footer-link {
  pointer-events: auto;
  color: white;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}
.footer-link:hover { border-bottom-color: currentColor; }
@media (max-width: 768px) {
  .footer-text { font-size: 0.5rem; }
  img { height: 0.75rem; }
}
</style>
