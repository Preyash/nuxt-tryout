<script setup>
import { ref, onMounted, watch } from "vue";
import { useAutoAnimate } from "@formkit/auto-animate/vue";

const [parent] = useAutoAnimate();
</script>

<template ref="parent">
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <CustomNavbar />
  <div class="mx-6 mt-[40px]">
    <slot></slot>
  </div>
  <Notivue v-slot="item">
    <Notification :item="item" :theme="pastelTheme">
      <NotificationProgress :item="item" />
    </Notification>
  </Notivue>
  <Toaster duration="1500" />
</template>
