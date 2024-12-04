<template>
  <div class="px-5">
    <!--inputs-->
    <div class="mb-5">
      <div class="mb-5">
        <LabeledTextInput type="text" placeholder="Бүлгийн нэр" label="Нэр" />
      </div>

      <div>
        <DropFileUpload label="Зураг" />
      </div>
    </div>

    <!--next button-->
    <div class="flex pb-6">
      <div class="grow"></div>
      <Button
        @click="
          $emit('active-page-change', {
            tabName: 'group-members',
            animationName: 'slide-left',
          })
        "
        class="contained-primary contained-text"
      >
        Дараагийн
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@src/components/ui/inputs/Button.vue";
import DropFileUpload from "@src/components/ui/inputs/DropFileUpload.vue";
import LabeledTextInput from "@src/components/ui/inputs/LabeledTextInput.vue";
</script>


