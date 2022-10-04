import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";

import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import Toast from "primevue/toast";
import Tooltip from "primevue/tooltip";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(DialogService);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("ConfirmDialog", ConfirmDialog);
  nuxtApp.vueApp.component("ConfirmPopup", ConfirmPopup);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.directive("tooltip", Tooltip);
});
