<template>
  <div class="container py-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title fw-bold">Request Information</h5>
        <p class="card-text text-muted small">
          Please enter information on the course this multimedia request is
          intended for...
        </p>

        <CheckboxField v-model="form.internalRequest" id="internalRequest">
          Internal Request
        </CheckboxField>

        <div class="row">
          <div class="col-md-6">
            <FormField
              id="courseCode"
              v-model="form.courseCode"
              placeholder="Course Code & Number *"
            />
            <DropdownField id="term" v-model="form.deliveryTerm">
              <option>Fall</option>
              <option>Winter</option>
              <option>Spring</option>
              <option>Summer</option>
            </DropdownField>
            <FormField
              id="weekUsed"
              v-model="form.weekUsed"
              placeholder="Week multimedia is used in course"
            />
            <FormField
              id="assetsLink"
              v-model="form.assetsLink"
              placeholder="Assets Link *"
            />
            <TextAreaField id="notes" v-model="form.notes" />
          </div>
          <div class="col-md-6">
            <DropdownField id="selectId" v-model="form.selectId">
              <option>123</option>
              <option>456</option>
            </DropdownField>
            <FormField
              id="instructorName"
              v-model="form.instructorName"
              placeholder="Instructor Name *"
            />
            <FormField
              id="pronunciation"
              v-model="form.correctPronunciation"
              placeholder="Correct Pronunciation"
            />
            <FormField
              id="pronouns"
              v-model="form.preferredPronouns"
              placeholder="Preferred Pronouns"
            />
            <FormField
              id="email"
              v-model="form.instructorEmail"
              placeholder="Instructor Email *"
            />
            <FormField
              id="onid"
              v-model="form.instructorOnid"
              placeholder="Instructor ONID *"
            />
            <FormField
              id="coDevName"
              v-model="form.coDevName"
              placeholder="Co-Developer Name"
            />
            <FormField
              id="coDevEmail"
              v-model="form.coDevEmail"
              placeholder="Co-Developer Email"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  internalRequest: false,
  courseCode: "",
  deliveryTerm: "",
  weekUsed: "",
  assetsLink: "",
  notes: "",
  selectId: "",
  instructorName: "",
  correctPronunciation: "",
  preferredPronouns: "",
  instructorEmail: "",
  instructorOnid: "",
  coDevName: "",
  coDevEmail: "",
});
</script>
