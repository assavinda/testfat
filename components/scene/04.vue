<template>
    <Container>
        <!-- Background Image -->
        <div>
            <img :src="images['01-text01.png']"class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <!-- Scrollable Container -->
        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-[500%] overflow-y-scroll scroll-smooth">
            <div class="w-full h-full"></div>
            <div class="w-full h-full"></div>
        </div>

        <div ref="textbox" class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div id="text-box" class="relative w-full h-full">
                <template v-for="(item, index) in elements" :key="index">
                    <p v-if="item.type === 'text' && item.content != '(ถึงเวลากินข้าวเช้ากับครอบครัว)' && item.content != 'เข้าใจเราสักที!'"
                       :class="{'opacity-100': scrollPercent >= index * 12, 'opacity-0': scrollPercent < index * 12}"
                       class="text-font text-normal font-medium absolute transition-opacity duration-700"
                       :style="{ top: item.top, left: item.left }">
                        {{ item.content }}
                    </p>
                    <p v-else-if="item.type === 'text' && item.content == '(ถึงเวลากินข้าวเช้ากับครอบครัว)'" 
                       :class="{'opacity-75': scrollPercent >= index * 12, 'opacity-0': scrollPercent < index * 12}"
                       class="text-font text-normal font-medium absolute transition-opacity duration-700"
                       :style="{ top: item.top, left: item.left }">
                        {{ item.content }}
                    </p>
                    <p v-else-if="item.type === 'text' && item.content == 'เข้าใจเราสักที!'" 
                       :class="{'opacity-100': scrollPercent >= index * 12, 'opacity-0': scrollPercent < index * 12}"
                       class="text-pink-600 text-big font-medium absolute transition-opacity duration-700"
                       :style="{ top: item.top, left: item.left }">
                        {{ item.content }}
                    </p>

                    <img v-else-if="item.type === 'image'"
                        ref="tired"
                        :src="images[tiredCurrentFrame]"
                        :class="{'opacity-100': scrollPercent >= index * 12, 'opacity-0': scrollPercent < index * 12}"
                        class="absolute transition-opacity duration-700 tired"
                        :style="{ top: item.top, left: item.left, width: item.width }">
                </template>
            </div>
            <div class="absolute top-[5%] left-0 w-full pointer-events-none">
                <div class="relative w-full flex justify-center">
                    <div class="w-[30%]">
                        <img :src="images['04-01clock.png']">
                    </div>          
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const scrollContainer = ref(null);
const scrollPercent = ref(0);
const textbox = ref(null)

const tired = ref(null)

let emit = defineEmits()

const elements = ref([
    { type: "text", content: " ", top: "0%", left: "0%" },
    { type: "text", content: "(ถึงเวลากินข้าวเช้ากับครอบครัว)", top: "30.2%", left: "28.5%" },
    { type: "text", content: "เราต้องทนฟัง", top: '41.2%', left: '24%' },
    { type: "text", content: "แม่บ่น", top: '41.2%', left: '43%' },
    { type: "text", content: "เรื่องแต่งตัวทุกวัน", top: '41.2%', left: '53%' },
    { type: "text", content: "เมื่อไรแม่จะเลิกทำแบบนี้", top: '52.2%', left: '15%' },
    { type: "text", content: "แล้ว", top: '52.2%', left: '48.5%' },
    { type: "text", content: "เข้าใจเราสักที!", top: '49.3%', left: '54.5%' },
    { type: "image", src: "04-03-1.png", top: "45%", left: "30%", width: "40%" },
]);

const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    console.log(`Scrolled: ${scrollPercent.value}%`);
    if (scrollPercent.value >= 100 && textbox.value) {
        animateTired()
        setTimeout(() => {
            textbox.value.classList.add('disappear');
        },2000)
        setTimeout(() => {
            emit('nextpage')
        },3000)
    }
};

const tiredCurrentFrame = ref('04-03-2.png')
let tiredInterval

function animateTired() {
    let tiredcount = 1;
    tiredInterval = setInterval(() => {
        tiredCurrentFrame.value = `04-03-${tiredcount}.png`;
        if (tiredcount >= 2) {
            tiredcount = 1;
        } else {
            tiredcount++;
        }
    }, 150);
}
</script>

<style scoped>
.text-normal {
        font-size: 6.04444444vh;
}

@media (max-aspect-ratio: 16/9) {
    .text-normal {
        font-size: 3.4vw;
    }
}

.text-big {
        font-size: 8.704vh !important;
}

@media (max-aspect-ratio: 16/9) {
    .text-big {
        font-size: 4.896vw !important;
    }
}

@keyframes disappear {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-20%);
        opacity: 0;
    }
}

.disappear {
    animation: disappear 1s ease-in-out forwards;
}
</style>
