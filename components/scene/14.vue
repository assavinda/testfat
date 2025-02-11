<template>
    <Container>
        <div>
            <img src="/images/14/m1-01.png" class="max-w-screen max-h-screen object-contain">
        </div>

        <div class="absolute top-[12.4%] left-[42%] w-[5%] lamp">
            <img src="/images/14/lamp.png">
        </div>

        <div class="absolute top-[12.4%] right-[1.35%] w-[5%] lamp">
            <img src="/images/14/lamp.png">
        </div>

        <!-- Select menu -->
        <div class="absolute top-0 left-0">
            <img :src="`/images/14/menu/${currentCategory}.png`">

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
            <img src="/images/14/button.png">
        </div>

        <!-- Body -->
        <div class="absolute top-0 left-0">
            <img :src="`/images/14/body/${currentSkin}.png`">
        </div>

        <!-- shoes, blonde hair, brown hair -->
        <div class="absolute w-full h-full top-0 left-0 z-[13]">
            <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img ref="clothes" src="/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="b-hair" src="/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="shoes" src="/images/14/blank.png">
                </div>
            </div>
        </div>

        <!-- clothes -->
        <div class="absolute top-0 left-0 z-[14]">
            <div>
                <img ref="clothes" src="/images/14/blank.png">
            </div>
        </div>

        <!-- dress, jacket, trousers -->
        <div class="absolute w-full h-full top-0 left-0 z-[16]">
            <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img ref="trousers" src="/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="dresses" src="/images/14/blank.png">
                </div>

                <div class="absolute top-0 left-0">
                    <img ref="jacket" src="/images/14/blank.png">
                </div>
            </div>
            
            
        </div>

        <!-- hair -->
        <div class="absolute top-0 left-0 z-[17]">
            <div>
                <img ref="hair" src="/images/14/blank.png">
            </div>
        </div>

        <!-- accessories (multi) -->
        <div class="absolute w-full h-full top-0 left-0 z-[18]">
            <div class="relative w-full h-full">
                <div class="absolute top-0 left-0">
                    <img ref="accessories1" src="/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories2" src="/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories3" src="/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories4" src="/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories5" src="/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories6" src="/images/14/blank.png">  
                </div>
                <div class="absolute top-0 left-0">
                    <img ref="accessories7" src="/images/14/blank.png">  
                </div>
            </div>
        </div>

        <!-- mouth -->
        <div class="absolute top-0 left-0 z-[19]">
            <div>
                <img ref="mouth" src="/images/14/blank.png">
            </div>
        </div>

        <!-- eyes -->
        <div class="absolute top-0 left-0 z-[20]">
            <div>
                <img ref="eyes" src="/images/14/blank.png">
            </div>
        </div>

        <div @click="animateCurtain" class="absolute top-0 left-0 z-[200] cursor-pointer">
            <img class="curtain" ref="curtain" src="/images/14/curtain/c1_10.png">
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
    
    currentLayer.value.src = `/images/14/${category}/${category}${item}.png`
}

const curtain = ref(null)
let c = 0
function animateCurtain() {
    let interval = setInterval(() => {
        curtain.value.src = `/images/14/curtain/c1_1${c}.png`
        c+=1
        if (c >= 60) {
            clearInterval(interval)
            curtain.value.classList.add('hidden')
        }
    },40)
}

const emit = defineEmits()

function nextgame() {
    let intervalreverse = setInterval(() => {
        curtain.value.classList.remove('hidden')
        curtain.value.src = `/images/14/curtain/c1_1${c}.png`
        c-=1
        if (c == 0) {
            clearInterval(intervalreverse)
            curtain.value.src = `/images/14/curtain/c1_1${c}.png`
            setTimeout(() => {
                emit('nextpage')
            },1500)
        }
    },40)
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