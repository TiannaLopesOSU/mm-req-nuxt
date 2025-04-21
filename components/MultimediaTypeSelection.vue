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

      <!-- Media Type Grid -->
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <div
          v-for="(type, index) in mediaTypes"
          :key="type.label"
          :class="getItemClass(index)"
        >
          <button
            class="btn btn-outline-primary w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3"
            @click="selectedType = type.label"
            :class="{ active: selectedType === type.label }"
          >
            <i :class="type.icon" class="mb-2" style="font-size: 1.5rem"></i>
            <span class="fw-semibold small text-center">{{ type.label }}</span>
          </button>
        </div>
      </div>

      <!-- Dynamically Loaded Component -->
      <div v-if="selectedTypeComponent" class="mt-4">
        <component :is="selectedTypeComponent" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from "vue";

const selectedType = ref(null);

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

// Dynamically map selected type to component
const selectedTypeComponent = computed(() => {
  if (!selectedType.value) return null;

  const map = {
    "One Term Development": defineAsyncComponent(() =>
      import("@/components/MediaTypes/OneTermDevelopmentForm.vue")
    ),
    Support: defineAsyncComponent(() =>
      import("@/components/MediaTypes/SupportForm.vue")
    ),
    Consultation: defineAsyncComponent(() =>
      import("@/components/MediaTypes/ConsultationForm.vue")
    ),
    Video: defineAsyncComponent(() =>
      import("@/components/MediaTypes/VideoForm.vue")
    ),
    Lecture: defineAsyncComponent(() =>
      import("@/components/MediaTypes/LectureForm.vue")
    ),
    DIY: defineAsyncComponent(() =>
      import("@/components/MediaTypes/DIYForm.vue")
    ),
    Animation: defineAsyncComponent(() =>
      import("@/components/MediaTypes/AnimationForm.vue")
    ),
    Web: defineAsyncComponent(() =>
      import("@/components/MediaTypes/WebForm.vue")
    ),
    "DVD Rip": defineAsyncComponent(() =>
      import("@/components/MediaTypes/DVDRipForm.vue")
    ),
    Glossary: defineAsyncComponent(() =>
      import("@/components/MediaTypes/GlossaryForm.vue")
    ),
    Graphics: defineAsyncComponent(() =>
      import("@/components/MediaTypes/GraphicsForm.vue")
    ),
    H5P: defineAsyncComponent(() =>
      import("@/components/MediaTypes/H5PForm.vue")
    ),
    Timeline: defineAsyncComponent(() =>
      import("@/components/MediaTypes/TimelineForm.vue")
    ),
  };

  return map[selectedType.value] || null;
});

// Responsive button grid layout
function getItemClass(index) {
  return index < 3 ? "flex-basis-25" : "flex-basis-17";
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

button.active {
  border-color: #0d6efd;
  background-color: #e7f1ff;
}
</style>
