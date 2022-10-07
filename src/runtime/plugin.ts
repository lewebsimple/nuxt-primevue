import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";

import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import Toast from "primevue/toast";

import BadgeDirective from "primevue/badgedirective";
import Ripple from "primevue/ripple";
import StyleClass from "primevue/styleclass";
import Tooltip from "primevue/tooltip";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(DialogService);
  nuxtApp.vueApp.use(ToastService);

  nuxtApp.vueApp.component("ConfirmDialog", ConfirmDialog);
  nuxtApp.vueApp.component("ConfirmPopup", ConfirmPopup);
  nuxtApp.vueApp.component("Toast", Toast);

  nuxtApp.vueApp.directive("badge", BadgeDirective);
  nuxtApp.vueApp.directive("ripple", Ripple);
  nuxtApp.vueApp.directive("styleclass", StyleClass);
  nuxtApp.vueApp.directive("tooltip", Tooltip);
});
