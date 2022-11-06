<template>
  <footer class="prose mx-auto px-6 py-12">
    <p>© {{ new Date().getFullYear() }} HundredBeans (Mohammad Daffa)</p>
    <p>Last Updated: {{ buildTime }} (GMT+7)</p>
  </footer>
</template>

<script setup>
const buildTime = new Date(__BUILD_TIMESTAMP__).toLocaleString("en-GB", {
  month: "long",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  // timeStyle: "long",
  timeZone: "Asia/Bangkok",
});
</script>
