<template>
  <div class="mb-3">
    <input
      :type="type"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  id: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});
</script>
