<template>
    <Container>
        <div>
            <img src="/public/images/14/m1-01.png" class="max-w-screen max-h-screen object-contain">
        </div>

        <div class="absolute top-[12.4%] left-[42%] w-[5%] lamp">
            <img src="/public/images/14/lamp.png">
        </div>

        <div class="absolute top-[12.4%] right-[1.35%] w-[5%] lamp">
            <img src="/public/images/14/lamp.png">
        </div>

        <!-- Select menu -->
        <div class="absolute top-0 left-0">
            <img :src="images.get(currentCategory)">

            <div class="absolute flex top-[5%] right-[3.7%] w-[52%] h-[8%] wearing z-[100]">
                <div v-for="section in category" @click="setCategory(section)" class="w-full h-full  cursor-pointer">

                </div>
            </div>

            <div class="absolute grid grid-cols-3 grid-rows-3 top-[13%] right-[7.2%] w-[45%] h-[85%]  z-[100]">
                <div v-for="item in categorydict[currentCategory]" @click="setItem(currentCategory,item)" class="w-full h-full  cursor-pointer">

                </div>
            </div>

            <div class="absolute top-[10.5%] left-[31%] w-[7%] h-[11%]  z-[100]">
                <div v-for="skin in skins" @click="setSkin(skin); console.log(currentSkin)" class="w-full h-full  cursor-pointer">

                </div>
            </div>
        </div>

        <!-- Button -->
        <div @click="nextgame()" class="absolute bottom-[6.3%] right-[1%] z-[101] w-[6.3%] cursor-pointer hover:scale-[1.2]">
            <img src="/public/images/14/button.png">
        </div>

        <!-- Body -->
        <div class="absolute top-0 left-0">
            <img :src="`./images/14/body/${currentSkin}.png`">
        </div>

        <!-- shoes, blonde hair, brown hair -->
        <div class="absolute w-full h-full top-0 left-0 z-[13]">
            <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img ref="clothes" src="/public/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="b-hair" src="/public/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="shoes" src="/public/images/14/blank.png">
                </div>
            </div>
        </div>

        <!-- clothes -->
        <div class="absolute top-0 left-0 z-[14]">
            <div>
                <img ref="clothes" src="/public/images/14/blank.png">
            </div>
        </div>

        <!-- dress, jacket, trousers -->
        <div class="absolute w-full h-full top-0 left-0 z-[16]">
            <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img ref="trousers" src="/public/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="dresses" src="/public/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="jacket" src="/public/images/14/blank.png">
                </div>
            </div>
            
            
        </div>

        <!-- hair -->
        <div class="absolute top-0 left-0 z-[17]">
            <div>
                <img ref="hair" src="/public/images/14/blank.png">
            </div>
        </div>

        <!-- accessories (multi) -->
        <div class="absolute w-full h-full top-0 left-0 z-[18]">
            <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img ref="accessories1" src="/public/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories2" src="/public/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories3" src="/public/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories4" src="/public/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories5" src="/public/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories6" src="/public/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories7" src="/public/images/14/blank.png">  
                </div>
            </div>
        </div>

        <!-- mouth -->
        <div class="absolute top-0 left-0 z-[19]">
            <div>
                <img ref="mouth" src="/public/images/14/blank.png">
            </div>
        </div>

        <!-- eyes -->
        <div class="absolute top-0 left-0 z-[20]">
            <div>
                <img ref="eyes" src="/public/images/14/blank.png">
            </div>
        </div>

        <div @click="animateCurtain" class="absolute top-0 left-0 z-[200] transition-all duration-500">
            <img class="curtain" ref="curtain" :src="`./images/14/curtain/c1_1${c}.png`">
        </div>


    </Container>
</template>

<script setup>
const category = ['eyes','mouth','hair','clothes','trousers','dresses','shoes','accessories']
const categorydict = 
{
    'eyes':['01','02','03','04','05','06'],
    'mouth':['01','02','03','04','05'],
    'hair':['01','02','03','04','05','06','07','08'],
    'clothes':['01','02','03','04','05'],
    'trousers':['01','02','03','04','05'],
    'dresses':['01','02','03','04'],
    'shoes':['01','02','03','04','05'],
    'accessories':['01','02','03','04','05','06','07']
}
const currentCategory = ref('eyes')
const skins = ['body01','body02','body03']
const currentSkin = ref('body01')

function setCategory(categoryName) {
    currentCategory.value = categoryName
}

const eyes = ref(null)
const mouth = ref(null)
const accessories1 = ref(null)
const accessories2 = ref(null)
const accessories3 = ref(null)
const accessories4 = ref(null)
const accessories5 = ref(null)
const accessories6 = ref(null)
const accessories7 = ref(null)

const accessories = [accessories1,accessories2,accessories3,accessories4,accessories5,accessories6,accessories7]
const wearing = ref([])

const jacket = ref(null)
const hair = ref(null)
const dresses = ref(null)
const trousers = ref(null)
const clothes = ref(null)
const shoes = ref(null)


function setSkin(skin) {
    currentSkin.value = skin
}

function setItem(category,item) {

    let currentLayer = null

    if (category == 'eyes') {
        currentLayer = eyes
    }
    else if (category == 'mouth') {
        currentLayer = mouth
    }
    else if (category == 'hair') {
        currentLayer = hair
    }
    else if (category == 'clothes') {
        currentLayer = clothes
        if (item == '05') {
            currentLayer = jacket
        }
    }
    else if (category == 'hair') {
        currentLayer = hair
    }
    else if (category == 'trousers') {
        currentLayer = trousers
    }
    else if (category == 'dresses') {
        currentLayer = dresses
    }
    else if (category == 'shoes') {
        currentLayer = shoes
    }
    else if (category == 'accessories') {
        currentLayer = accessories[wearing.value.length]

        if (!wearing.value.includes(`${category}${item}`)) {
            wearing.value.push(`${category}${item}`)
        }
        console.log(wearing.value.length)
    }
    
    currentLayer.value.src = `./images/14/${category}/${category}${item}.png`
}


const curtain = ref(null)
let c = 0

const props = defineProps({
  images: Object
})

function animateCurtain() {
    if (!curtain.value) return

    function step() {
        if (c < 60) {
            if (images.value.get('curtain'+ c)) {
                curtain.value.src = images.value.get('curtain' + c)
            }
            c++
            setTimeout(step, 40)
        } else {
            curtain.value.classList.add('hidden')
        }
    }

    step()
}

const images = ref(new Map())

function preloadImages() {
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
    setTimeout(animateCurtain, 500)
})

const emit = defineEmits()

function nextgame() {
    if (!curtain.value) return
    c = 60
    curtain.value.classList.remove('hidden')
    function step() {
        if (c >= 0) {
            if (images.value.get('curtain' + c)) {
                curtain.value.src = images.value.get( 'curtain' + c)
            }
            c--
            setTimeout(step, 40)
        }
    }

    step()
}
</script>

<style scoped>

@keyframes lamp {
    0% {
        rotate: -10deg;
    }
    100% {
        rotate: 10deg;
    }
}
.lamp {
    animation: lamp alternate infinite 1.2s ease-in-out;
    transform-origin: top;
}
</style>