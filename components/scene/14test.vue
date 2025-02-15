<template>
    <Container>
        <div>
            <img :src="images['14-m1-01.png']"class="max-w-screen max-h-screen object-contain">
        </div>

        <div class="absolute top-[12.4%] left-[42%] w-[5%] lamp">
            <img :src="images['14-lamp.png']">
        </div>

        <div class="absolute top-[12.4%] right-[1.35%] w-[5%] lamp">
            <img :src="images['14-lamp.png']">
        </div>

        <!-- Select menu -->
        <div class="absolute top-0 left-0">
            <img :src="images[`14-menu-${currentCategory}.png`]">

            <div class="absolute flex top-[5%] right-[3.7%] w-[52%] h-[8%] wearing z-[100]">
                <div v-for="section in Object.keys(categorydict)" @click="setCategory(section)" class="w-full h-full cursor-pointer">

                </div>
            </div>

            <div class="absolute grid grid-cols-3 grid-rows-3 top-[13%] right-[7.2%] w-[45%] h-[85%] z-[100]">
                <div v-for="(zindex, item) in categorydict[currentCategory]" @click="setItem(currentCategory,item,zindex)" class="w-full h-full cursor-pointer">
                    <p>{{ item + " : z-" + zindex}}</p>
                </div>
            </div>

            <div class="absolute top-[10.5%] left-[31%] w-[7%] h-[11%]  z-[100]">
                <div v-for="skin in skins" @click="setSkin(skin); console.log(currentSkin)" class="w-full h-full cursor-pointer">

                </div>
            </div>
        </div>

        <!-- Button -->
        <div @click="nextgame()" class="absolute bottom-[6.3%] right-[1%] z-[101] w-[6.3%] cursor-pointer hover:scale-[1.2]">
            <img :src="images['14-button.png']">
        </div>

        <div @click="" class="absolute bottom-[6.3%] left-[32%] z-[101] w-[6.3%] cursor-pointer hover:scale-[1.2]">
            <img :src="images['13-x-02.png']">
        </div>

        <!-- Body -->
        <div class="absolute top-0 left-0">
            <img :src="images[`14-body-${currentSkin}.png`]">
        </div>

        <!-- Items -->

        <!-- type 01 -->
        <div class="absolute top-0 left-0 w-full h-full">
            <div ref="wearingItemsBox" class="relative w-full h-full">
                <div v-for="(items, category) in selectedItems" :key="category" class="absolute top-0 left-0 w-full h-full">
                    <div v-for="(zindex,item) in items" :key="item" class="absolute top-0 left-0" :style="{ zIndex: zindex}">
                        <img :src="images[`14-${category}-${item}.png`]">
                    </div>
                </div>
            </div>
        </div>


        <!-- ---------------- -->

        <div @click="animateCurtain" class="absolute top-0 left-0 z-[200] transition-all duration-500 cursor-pointer hidden">
            <img class="curtain" ref="curtain" :src="images[currentCurtainFrame]">
        </div>


    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const currentLayerType = ref(1)
const wearingItemsBox = ref(null)
// const categorydict = ref({})
const categorydict = {
    'eyes':{
        '01':'14',
        '02':'14',
        '03':'14',
        '04':'14',
        '05':'14',
        '06':'14'
    },
    'mouth':{
        '01':'13',
        '02':'13',
        '03':'13',
        '04':'13',
        '05':'13'
    },
    'hair':{
        '01':'7',
        '02':'7',
        '03':'7',
        '04':'7',
        '05':'7',
        '06':'2',
        '07':'2',
        '08':'7'
    },
    'clothes':{
        '01':'3',
        '02':'3',
        '03':'3',
        '04':'3',
        '05':'6'
    },
    'trousers':{
        '01':'5',
        '02':'5',
        '03':'5',
        '04':'5',
        '05':'5'
    },
    'dresses':{
        '01':'6',
        '02':'6',
        '03':'1',
        '04':'6'
    },
    'shoes':{
        '01':'1',
        '02':'1',
        '03':'1',
        '04':'1',
        '05':'1'
    },
    'accessories':{
        '01':'10',
        '02':'9',
        '03':'4',
        '04':'8',
        '05':'12',
        '06':'4',
        '07':'11'
    }
}
const categoryType2 = {
    'eyes':{
        '01':'16',
        '02':'16',
        '03':'16',
        '04':'16',
        '05':'16',
        '06':'16'
    },
    'mouth':{
        '01':'15',
        '02':'15',
        '03':'15',
        '04':'15',
        '05':'15'
    },
    'hair':{
        '01':'8',
        '02':'8',
        '03':'8',
        '04':'8',
        '05':'8',
        '06':'1',
        '07':'1',
        '08':'8'
    },
    'clothes':{
        '01':'1',
        '02':'1',
        '03':'1',
        '04':'1',
        '05':'1'
    },
    'trousers':{
        '01':'1',
        '02':'1',
        '03':'1',
        '04':'1',
        '05':'1'
    },
    'dresses':{
        '01':'1',
        '02':'1',
        '03':'4',
        '04':'1'
    },
    'shoes':{
        '01':'6',
        '02':'6',
        '03':'6',
        '04':'6',
        '05':'6'
    },
    'accessories':{
        '01':'11',
        '02':'10',
        '03':'3',
        '04':'9',
        '05':'13',
        '06':'7',
        '07':'12'
    }
}
const selectedItems = ref({
    eyes: {},
    mouth: {},
    hair: {},
    clothes: {},
    trousers: {},
    dresses: {},
    shoes: {},
    accessories: {}
});
const skins = ['body01','body02','body03']

const currentCategory = ref('eyes')
const currentSkin = ref('body01')

// watch(currentLayerType, (newValue) => {
//     if (newValue === 1) {
//         categorydict.value = categoryType1;
//     }
//     else if (newValue === 2) {
//         categorydict.value = categoryType2;
//     }
// }, { immediate: true });

function setCategory(categoryName) {
    currentCategory.value = categoryName
}

function setSkin(skin) {
    currentSkin.value = skin
}

function setItem(category, item , zindex) {
    //check if there's a pink dress then change layer type
    if(Object.keys(selectedItems.value.dresses).includes('03')) {
        currentLayerType.value = 2
        console.log('change type to 2')
    }
    else {
        currentLayerType.value = 1
        console.log('change type to 1')
    }

    if(Object.keys(selectedItems.value[category]).includes(item)) {
        delete selectedItems.value[category][item]
    }
    else {
        //add item
        selectedItems.value[category] = Object.assign({}, selectedItems.value[category], { [item]: zindex });
    }

    console.log(selectedItems.value);
}

const curtain = ref(null)
const currentCurtainFrame = ref('14-curtain-c1_10.png')
let c = 0

function animateCurtain() {
    if (!curtain.value) return

    function step() {
        if (c < 60) {
            currentCurtainFrame.value = `14-curtain-c1_1${c}.png`
            c++
            setTimeout(step, 40)
        } else {
            curtain.value.classList.add('hidden')
        }
    }

    step()
}

const emit = defineEmits()

function nextgame() {
    if (!curtain.value) return
    c = 60
    curtain.value.classList.remove('hidden')
    function step() {
        if (c >= 0) {
            currentCurtainFrame.value = `14-curtain-c1_1${c}.png`
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