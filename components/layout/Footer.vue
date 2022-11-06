<template>
  <footer class="prose mx-auto px-6 py-12">
    <p>© {{ new Date().getFullYear() }} HundredBeans (Mohammad Daffa)</p>
    <p>Last Updated: {{ buildTime }}</p>
  </footer>
</template>

<script setup>
const buildTime = __BUILD_TIMESTAMP__;
</script>
