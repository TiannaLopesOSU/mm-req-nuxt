<template>
  <div class="form-check mb-3">
    <input
      type="checkbox"
      class="form-check-input"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id" class="form-check-label">
      <slot />
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  id: String,
});
</script>
