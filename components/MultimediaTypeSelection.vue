<template>
  <div class="card shadow-sm mt-4">
    <div class="card-body">
      <h5 class="card-title fw-bold">Multimedia Type</h5>
      <p class="card-text text-muted small">
        Please choose the type of media you’d like to request below. If you have
        multiple media pieces needed, please submit individual requests. For
        multimedia deadlines, please refer to our
        <a href="#" class="text-primary fw-semibold text-decoration-none"
          >Timeline</a
        >.
      </p>

      <!-- Legend -->
      <div class="mb-3 small">
        Capacity for the selected term:
        <span class="ms-2 badge bg-primary">Open capacity</span>
        <span class="ms-2 badge bg-warning text-dark">Waitlisted</span>
        <span class="ms-2 badge bg-danger">Past Request Deadline</span>
      </div>

      <!-- Custom Grid Layout -->
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <div
          v-for="(type, index) in mediaTypes"
          :key="type.label"
          :class="getItemClass(index)"
        >
          <button
            class="btn btn-outline-primary w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3"
          >
            <i :class="type.icon" class="mb-2" style="font-size: 1.5rem"></i>
            <span class="fw-semibold small text-center">{{ type.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const mediaTypes = [
  { label: "One Term Development", icon: "bi-1-circle" },
  { label: "Support", icon: "bi-tools" },
  { label: "Consultation", icon: "bi-chat-dots" },
  { label: "Video", icon: "bi-film" },
  { label: "Lecture", icon: "bi-person-video" },
  { label: "DIY", icon: "bi-brush" },
  { label: "Animation", icon: "bi-stars" },
  { label: "Web", icon: "bi-globe" },
  { label: "DVD Rip", icon: "bi-disc" },
  { label: "Glossary", icon: "bi-journal-text" },
  { label: "Graphics", icon: "bi-image" },
  { label: "H5P", icon: "bi-cube" },
  { label: "Timeline", icon: "bi-calendar3" },
];

// Custom class to handle 3/5/5 layout
function getItemClass(index) {
  if (index < 3) return "flex-basis-25";
  return "flex-basis-17";
}
</script>

<style scoped>
.flex-basis-25 {
  flex: 0 0 30%;
  max-width: 30%;
}

.flex-basis-17 {
  flex: 0 0 17%;
  max-width: 17%;
}
</style>
