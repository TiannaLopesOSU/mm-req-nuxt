<template>
  <div class="mb-3">
    <select
      class="form-select"
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">Select...</option>
      <slot />
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  id: String,
});
</script>
