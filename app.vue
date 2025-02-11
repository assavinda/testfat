<template>
  <div class="flex h-screen w-screen bg-black place-items-center justify-center">

    <Scene00 v-if="currentScene === '00'" @start="setScene('02')"></Scene00>

    <Scene01 v-if="currentScene === '01'"></Scene01>

    <Scene02 v-if="currentScene === '02'" @nextpage="setScene('13')"></Scene02>

    <Scene13 v-if="currentScene === '13'" @nextpage="setScene('14')"></Scene13>

    <Scene14 v-if="currentScene === '14'" @nextpage="setScene('00')" :images="images"></Scene14>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
