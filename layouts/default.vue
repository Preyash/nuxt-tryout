<template>
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