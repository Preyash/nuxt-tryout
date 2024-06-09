<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import emblaCarouselVue from "embla-carousel-vue";

const OPTIONS = { loop: true, slidesToScroll: 1  };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const [emblaRef, emblaApi] = emblaCarouselVue(OPTIONS);

const scrollPrev = () => {
  emblaApi.value.scrollPrev();
};

const scrollNext = () => {
  emblaApi.value.scrollNext();
};

onMounted(() => {
  if (emblaApi.value) {
    console.log(emblaApi.value);
  }
});
</script>

<template>
  <h2>Embla Carousel</h2>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div v-for="(index, i) in SLIDES" :key="i" class="embla__slide">
        <div class="embla__slide__number">{{ i + 1 }}</div>
      </div>
    </div>
  </div>
  <button @click="scrollPrev" class="embla__prev">Prev</button>
  <button @click="scrollNext" class="embla__next">Next</button>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  background: #000;
  color: orange;
  padding: 20px;
  cursor: pointer;
}
</style>
