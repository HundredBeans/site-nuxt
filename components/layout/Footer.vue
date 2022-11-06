<template>
  <footer class="prose mx-auto px-6 py-12">
    <p>© {{ new Date().getFullYear() }} HundredBeans (Mohammad Daffa)</p>
    <p>Last Updated: {{ buildTime }} (GMT+7)</p>
  </footer>
</template>

<script setup>
const buildTime = new Date(__BUILD_TIMESTAMP__).toLocaleString("en-GB", {
  timeZone: "Asia/Bangkok",
});
</script>
