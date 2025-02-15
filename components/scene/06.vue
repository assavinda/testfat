<template>
    <Container>
        <!-- Background Image -->
        <div>
            <img :src="images['01-text01.png']" class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <div ref="bgbox" class="absolute w-full h-full left-0 top-0 pointer-events-none appear">
            <div>
                <img :src="images['06-gbody.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img :src="images['06-bg-g.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img ref="grand" :src="images[grandCurrentFrame]">
            </div>
        </div>

        <div ref="tired" class="absolute top-[30%] left-[30%] w-[40%]" style="opacity: 0;">
            <div class="text-bubbles">
                <img :src="images['06-textg09.png']">
            </div>
        </div>

        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-full mask" :class="isScrollLock == false ? 'overflow-y-scroll scroll-smooth' : '' ">
            <div class="w-full h-[150%]"></div>
            <div class="w-full h-full">
                <div class="relative w-full h-full">
                    <div class="absolute top-0 left-[4%] w-[35%] text-bubbles">
                        <img :src="images['06-textg01.png']">
                    </div>
                    <div class="absolute top-[24%] left-[5%] w-[35%] text-bubbles-r">
                        <img :src="images['06-textg02.png']">
                    </div>
                    <div class="absolute top-[5%] right-[8%] w-[35%] text-bubbles">
                        <img :src="images['06-textg03.png']">
                    </div>
                    <div class="absolute top-[28%] right-[0%] w-[45%] text-bubbles-r">
                        <img :src="images['06-textg04.png']">
                    </div>
                    <div class="absolute top-[60%] right-[4%] w-[35%] text-bubbles">
                        <img :src="images['06-textg05.png']">
                    </div>
                    <div class="absolute top-[45%] left-[0%] w-[47%] text-bubbles-r">
                        <img :src="images['06-textg06.png']">
                    </div>
                    <div class="absolute top-[68%] left-[2%] w-[45%] text-bubbles">
                        <img :src="images['06-textg07.png']">
                    </div>
                    <div class="absolute top-[88%] right-[10%] w-[35%] text-bubbles-r">
                        <img :src="images['06-textg08.png']">
                    </div>
                </div>
            </div>
            <div class="w-full h-full"></div>
        </div>
    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const isScrollLock = ref(false)
const scrollContainer = ref(null);
const scrollPercent = ref(0);
const bgbox = ref(null)
const tired = ref(null)
const grand = ref(null)

let emit = defineEmits()


const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    console.log(scrollPercent.value)
    if (scrollPercent.value >= 32 && scrollPercent.value < 100 && scrollPercent.value < 70) {
        if (!grandInterval) {
            animateGrand();
        }
    }
    else if (scrollPercent.value >= 70 && scrollPercent.value < 100) {
        clearInterval(grandInterval);
        grandCurrentFrame.value = '06-eatg4.png'
    }
    else if (scrollPercent.value >= 100) {
        isScrollLock.value = true
        bgbox.value.classList.remove('appear')
        bgbox.value.classList.add('disappear')
        setTimeout(() => {
            tired.value.classList.add('appear')
        },1000)
        setTimeout(() => {
            tired.value.classList.remove('appear')
            tired.value.classList.add('fade-out')
        },3500)
        setTimeout(() => {
            emit('nextpage')
        },4500)
    }
};

const grandCurrentFrame = ref('06-eatg2.png')
let grandInterval

function animateGrand() {
    let grandcount = 1;
    grandInterval = setInterval(() => {
        grandCurrentFrame.value = `06-eatg${grandcount}.png`;
        if (grandcount >= 3) {
            grandcount = 1;
        } else {
            grandcount++;
        }
    }, 150);
}

onUnmounted(() => {
    clearInterval(grandInterval);
});

</script>

<style scoped>

.mask {
    -webkit-mask-image: url(/images/maskimage.png);
    mask-image: url(/images/maskimage.png);
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
}

@keyframes tired {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
}

.tired {
    animation: tired alternate infinite 0.8s ease-in-out;
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

@keyframes fade {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.fade-out {
    animation: fade 1.5s ease-in-out forwards;
}

@keyframes text-motion {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.025);
    }
}

.text-bubbles {
    animation: text-motion infinite alternate 0.8s ease-in-out;
}

.text-bubbles-r {
    animation: text-motion infinite alternate-reverse 0.8s ease-in-out;
}
</style>