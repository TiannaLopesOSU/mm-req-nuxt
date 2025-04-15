<template>
  <Navbar />
  <div class="container py-4">
    <NuxtPage />
    <MultimediaTypeSelection />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import MultimediaTypeSelection from "~/components/MultimediaTypeSelection.vue";
</script>
