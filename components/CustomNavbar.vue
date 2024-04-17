<script setup>
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-icons/vue";

const links = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/vuelidate", text: "Vuelidate" },
];
</script>

<template>
  <div
    className="sticky top-0 flex items-center justify-between p-6 bg-gray-200"
  >
    <h1 className="flex items-center gap-2" href="#">
      <span className="text-lg font-semibold">LOGO</span>
    </h1>
    <div className="hidden md:flex gap-4">
      <div v-for="link in links" :key="link.id">
        <NuxtLink
          className="text-lg font-medium hover:underline underline-offset-4"
          :href="link.href"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" size="icon" variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid w-[200px] p-4">
          <div v-for="link in links" :key="link.id">
            <NuxtLink
              className="text-lg font-medium hover:underline underline-offset-4"
              :href="link.href"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>
