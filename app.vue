<template>
  <div class="flex h-screen w-screen bg-black place-items-center justify-center">

    <Scene00 v-if="currentScene === '00'" @start="setScene('01')"></Scene00>

    <Scene01 v-if="currentScene === '01'" @nextpage="setScene('02')"></Scene01>

    <Scene02 v-if="currentScene === '02'" @nextpage="setScene('03')"></Scene02>

    <Scene03 v-if="currentScene === '03'" @nextpage="setScene('04')"></Scene03>
    
    <Scene04 v-if="currentScene === '04'" @nextpage="setScene('05')"></Scene04>
    
    <Scene05 v-if="currentScene === '05'" @nextpage="setScene('06')"></Scene05>

    <Scene06 v-if="currentScene === '06'" @nextpage="setScene('07')"></Scene06>

    <Scene07 v-if="currentScene === '07'" @nextpage="setScene('08')"></Scene07>

    <Scene08 v-if="currentScene === '08'" @nextpage="setScene('09')"></Scene08>

    <Scene13 v-if="currentScene === '13'" @nextpage="setScene('14')"></Scene13>

    <Scene14 v-if="currentScene === '14'" @nextpage="setScene('00')"></Scene14>

  </div>
</template>

<script setup>
import { useImagePreloader } from "@/composables/useImagePreloader";

// Load images
const { images } = useImagePreloader();

// Provide after defining images
provide("preloadedImages", images);

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
    },
  ],
});

const currentScene = ref('00');

function setScene(sceneName) {
  currentScene.value = sceneName;
}
</script>

<style>
body {
  overflow: hidden;
  font-family: "Kanit", serif;
}

img {
  user-select: none;
  pointer-events: none;
}

::-webkit-scrollbar {
  display: none;
}

/* 
body {
    cursor: url('/images/mousecursor/cursor01.png') 32 32, auto !important;
}

body, * {
    cursor: url('/images/mousecursor/cursor01.png') 16 16, pointer !important;
} */
</style>
