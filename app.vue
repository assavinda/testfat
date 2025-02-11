<template>
  <div class="flex h-screen w-screen bg-black place-items-center justify-center">

    <Scene00 v-if="currentScene === '00'" @start="setScene('02')"></Scene00>

    <Scene01 v-if="currentScene === '01'"></Scene01>

    <Scene02 v-if="currentScene === '02'" @nextpage="setScene('13')"></Scene02>

    <Scene13 v-if="currentScene === '13'" @nextpage="setScene('14')"></Scene13>

    <Scene14 v-if="currentScene === '14'" @nextpage="setScene('00')"></Scene14>

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


const imagesMap = ref({});
const imagesLoaded = ref(false);

const getFileName = (path) => path.split('/').pop();

const preloadImages = async () => {
  const imageModules = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,gif,webp}', { eager: true });

  for (const [path, module] of Object.entries(imageModules)) {
    const filename = getFileName(path);
    const img = new Image();
    img.src = module.default || module;
    img.onload = () => {
      imagesMap.value[filename] = img.src;
      console.log('downloaded')
    };
  }
};

onMounted(preloadImages);
provide('imagesMap', imagesMap); // Provide globally
</script>
