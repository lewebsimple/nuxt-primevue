<template>
  <div id="home">
    <Button label="PrimeVUE" icon="pi pi-check" @click="onClick" />
    <Dialog v-model:visible="showDialog" @hide="onHide">
      <template #header>
        <h3>Header</h3>
      </template>
      Dialog content goes here.
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { useToast } from "primevue/usetoast";

const showDialog = ref<boolean>(false);

const toast = useToast();
function onClick() {
  showDialog.value = true;
}
function onHide() {
  toast.add({ severity: "info", summary: "Summary", detail: "Toast details go here", life: 3000 });
}
</script>
