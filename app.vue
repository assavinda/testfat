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

const categorydict = {
    'eyes': ['01', '02', '03', '04', '05', '06'],
    'mouth': ['01', '02', '03', '04', '05'],
    'hair': ['01', '02', '03', '04', '05', '06', '07', '08'],
    'clothes': ['01', '02', '03', '04', '05'],
    'trousers': ['01', '02', '03', '04', '05'],
    'dresses': ['01', '02', '03', '04'],
    'shoes': ['01', '02', '03', '04', '05'],
    'accessories': ['01', '02', '03', '04', '05', '06', '07']
}

const images = ref(new Map())

function preloadImages() {
    let loadedCount = 0
    let totalImages = 60 + Object.keys(categorydict).length

    for (let i = 0; i < 60; i++) {
        const img = new Image()
        img.src = `./images/14/curtain/c1_1${i}.png`
        img.onload = () => {
            images.value.set(`curtain${i}`, img.src)
        }
    }

    for (let category in categorydict) {
        const img = new Image()
        img.src = `./images/14/menu/${category}.png`
        img.onload = () => {
            images.value.set(`${category}`, img.src)
        }
        for (let i = 0; i < categorydict[category].length; i++) {
            const img = new Image()
            img.src = `./images/14/${category}/${category}${categorydict[category][i]}.png`
            img.onload = () => {
                images.value.set(`${category}${categorydict[category][i]}`, img.src)
            }
        }
    }
}

onMounted(() => {
    preloadImages()
})
</script>
