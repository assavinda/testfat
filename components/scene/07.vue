<template>
    <Container ref="container">
        <!-- Background Image -->
        <div>
            <img :src="images['01-text01.png']"class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <!-- Scrollable Container -->
        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-[500%]" :class="isScrollLock == false ? 'overflow-y-scroll scroll-smooth' : '' ">
            <div class="w-full h-full"></div>
            <div class="w-full h-[50%]"></div>
        </div>

        <div @animationend="animateClock" ref="bgbox" class="absolute w-full h-full left-0 top-[-15%] pointer-events-none appear">
            <div>
                <img :src="images['07-clock-bg.png']">
            </div>
            <div ref="short" class="absolute top-[52%] left-[40.5%] w-[14%] rotate-[-5deg]" :style="{ transformOrigin: '70%' }">
                <img :src="images['07-clock01.png']">
            </div>
            <div ref="long" class="absolute top-[30%] left-[49.3%] w-[1%] rotate-[-10deg]" :style="{ transformOrigin: '85% 85%' }">
                <img :src="images['07-clock02.png']">
            </div>
            <div class="absolute top-[15%] left-[26.75%] w-[45%]">
                <img :src="images['07-clock00.png']">
            </div>
        </div>

        <div ref="textbox" class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div id="text-box" class="relative w-full h-full">
                <template v-for="(item, index) in elements" :key="index">
                    <p v-if="item.type === 'text'" 
                       :class="{'opacity-100': scrollPercent >= index * 33, 'opacity-0': scrollPercent < index * 33}"
                       class="text-font text-normal font-medium absolute transition-opacity duration-700"
                       :style="{ top: item.top, left: item.left }">
                        {{ item.content }}
                    </p>
                </template>
            </div>
        </div>

        <div ref="gatebox" class="absolute w-full h-full left-0 top-[0%] pointer-events-none" style="opacity: 0;">
            <div ref="gate">
                <img :src="images[gateCurrentFrame]">
            </div>
            <div class="absolute top-0 left-0">
                <img :src="images['07-work-o-01.png']">
            </div>
            <div ref="gateClosed" class="absolute top-[51%] left-0">
                <img :src="images['07-work-03-01.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img :src="images['07-work-05-01.png']">
            </div>
            <div @mousedown="startDrag" class="absolute top-[3.8%] left-[6.2%] w-[10%] cursor-pointer"
            :style="{ top: `${pos.top}%`, left: `${pos.left}%`}">
                <img :src="images['07-ID_other.png']">
            </div>
        </div>
    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const isScrollLock = ref(false)
const scrollContainer = ref(null);
const scrollPercent = ref(0);
const textbox = ref(null)
const bgbox = ref(null)
const short = ref(null)
const long = ref(null)

const gatebox = ref(null)
const gateClosed = ref(null)

const container = ref(null);
let containerBounds = null;

function getBound() {
    const containerElement = container.value?.$el || container.value;
    container.value = containerElement.getBoundingClientRect();
    containerBounds = containerElement.getBoundingClientRect();
}

let pos = ref({ top: 3.8, left: 6.2, pcx: 0, pcy: 0 });

let emit = defineEmits()

const elements = ref([
    { type: "text", content: " ", top: "0%", left: "0%" },
    { type: "text", content: "ถึงเวลาทำงานแล้วสินะ", top: "69.2%", left: "35%" },
    { type: "text", content: "ไม่อยากทำเลย...", top: "80.2%", left: "22%" },
    { type: "text", content: "ต้องมาเจอสังคมแบบนั้น", top: "80.2%", left: "44%" },
]);

function startDrag(e) {

    containerBounds == null ? getBound() : console.log('gotten');

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const pcX = (clientX - container.value.left) / container.value.width * 100;
    const pcY = (clientY - container.value.top) / container.value.height * 100;

    pos.value.left = pcX - 5
    pos.value.top = pcY - 30

    pos.value.pcx = pcX
    pos.value.pcy = pcY

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);

}

let gateCurrentFrame = ref('07-work-01-01.png')
let gateInterval
let gatecount = 1;

function animateGate() {
    console.log('open gate')
    gateInterval = setInterval(() => {
        
        if (gatecount >= 8 && gatecount < 9) {
            gateClosed.value.classList.add('hidden')
        }
        else if (gatecount <= 9) {
            gateCurrentFrame.value = `07-gateopen-work00${gatecount}.png`
        }
        else if (gatecount >= 10 && gatecount <= 39) {
            gateCurrentFrame.value = `07-gateopen-work0${gatecount}.png`
        }
        else if (gatecount >= 40) {
            clearInterval(gateInterval)
            setTimeout(() => {
                gatebox.value.classList.remove('appear')
                gatebox.value.classList.add('disappear')
            },500)
            setTimeout(() => {
                emit('nextpage')
            },2000)
            
        }
        gatecount++;
        console.log(gatecount)
    },30)
}

function onDrag(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const dpcX = (clientX - container.value.left) / container.value.width * 100;
    const dpcY = (clientY - container.value.top) / container.value.height * 100;

    pos.value.left = dpcX - 5
    pos.value.top = dpcY - 30

    // console.log(pos.value.left, pos.value.top)

    if (pos.value.left >= 69 && pos.value.left <= 77 && pos.value.top >= 33 && pos.value.top <= 40) {
        if (!gateInterval) {
            animateGate()
        }
    }
}

function stopDrag() {
    pos.value.left = 6.2
    pos.value.top = 3.8

    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
}

const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    console.log(scrollPercent.value)

    if (scrollPercent.value >= 100 && textbox.value) {
        setTimeout(() => {
            bgbox.value.classList.remove('appear');
            bgbox.value.classList.add('disappear');
            textbox.value.classList.add('disappear');
            isScrollLock.value = true
        },1000)
        setTimeout(() => {
            gatebox.value.classList.add('appear')
            gatebox.value.classList.remove('pointer-events-none')
        },2200)
    }
};

function animateClock() {
    short.value.classList.add('short')
    long.value.classList.add('long')
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

@keyframes appear {
    0% {
        transform: translateY(20%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.appear {
    animation: appear 1s ease-in-out forwards;
}

@keyframes short {
    0% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(6deg);
    }
    85% {
        transform: rotate(4deg);
    }
    100% {
        transform: rotate(5deg);
    }
}

.short {
    animation: short 1.2s ease-out forwards;
    transform-origin: 70%;
}

@keyframes long {
    0% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(11deg);
    }
    85% {
        transform: rotate(9deg);
    }
    100% {
        transform: rotate(10deg);
    }
}

.long {
    animation: long 0.8s ease-out forwards;
    transform-origin: 100%;
}
</style>
