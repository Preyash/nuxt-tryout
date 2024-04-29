<template>
  <Link rel="stylesheet" href="https://unpkg.com/chota@latest" />
  <CustomNavbar />
  <div class="mx-6 mt-[40px]">
    <slot></slot>
  </div>
  <Toaster duration="1500" />
</template>