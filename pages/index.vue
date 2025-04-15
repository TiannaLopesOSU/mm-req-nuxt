<template>
  <div class="container my-5">
    <h1>Welcome</h1>
    <p>This is the root route. Click below to go to the course request form.</p>
    <NuxtLink to="/request" class="btn btn-primary"
      >Go to Request Form</NuxtLink
    >
  </div>
</template>
<script setup>
const router = useRouter();
router.replace("/request");
</script>
