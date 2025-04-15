<template>
  <div class="mb-3">
    <textarea
      class="form-control"
      :id="id"
      rows="3"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  id: String,
});
</script>
