<template>
    <Container>
        <!-- Background Image -->
        <div>
            <img :src="images['01-text01.png']" class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <div ref="bgbox" class="absolute w-full h-full left-0 top-0 pointer-events-none appear">
            <div>
                <img :src="images['05-eat1-01.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img ref="mom" :src="images[momCurrentFrame]">
            </div>
        </div>

        <div ref="tired" class="absolute top-[15%] left-[30%] w-[40%]" style="opacity: 0;">
            <div class="text-bubbles">
                <img src="/public/images/05/textm09.png">
            </div>
        </div>

        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-full overflow-y-scroll scroll-smooth mask">
            <div class="w-full h-[150%]"></div>
            <div class="w-full h-full">
                <div class="relative w-full h-full">
                    <div class="absolute top-0 left-[5%] w-[40%] text-bubbles">
                        <img src="public/images/05/textm01.png">
                    </div>
                    <div class="absolute top-[24%] left-[6%] w-[40%] text-bubbles-r">
                        <img src="public/images/05/textm02.png">
                    </div>
                    <div class="absolute top-[5%] right-[14%] w-[40%] text-bubbles">
                        <img src="public/images/05/textm03.png">
                    </div>
                    <div class="absolute top-[33%] right-[14%] w-[40%] text-bubbles-r">
                        <img src="public/images/05/textm04.png">
                    </div>
                    <div class="absolute top-[52%] right-[8%] w-[40%] text-bubbles">
                        <img src="public/images/05/textm05.png">
                    </div>
                    <div class="absolute top-[48%] left-[0%] w-[52%] text-bubbles-r">
                        <img src="public/images/05/textm06.png">
                    </div>
                    <div class="absolute top-[79%] left-[2%] w-[40%] text-bubbles">
                        <img src="public/images/05/textm07.png">
                    </div>
                    <div class="absolute top-[68%] right-[2%] w-[53%] text-bubbles-r">
                        <img src="public/images/05/textm08.png">
                    </div>
                </div>
            </div>
            <div class="w-full h-full"></div>
        </div>
    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const scrollContainer = ref(null);
const scrollPercent = ref(0);
const bgbox = ref(null)
const tired = ref(null)
const mom = ref(null)

const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    if (scrollPercent.value >= 100) {
        bgbox.value.classList.remove('appear')
        bgbox.value.classList.add('disappear')
        setTimeout(() => {
            tired.value.classList.add('appear')
        },1000)
        setTimeout(() => {
            tired.value.classList.remove('appear')
            tired.value.classList.add('fade-out')
        },3500)
    }
};

const momCurrentFrame = ref('05-eatm01.png')
let momInterval

function animateMom() {
    let momcount = 1;
    momInterval = setInterval(() => {
        momCurrentFrame.value = `05-eatm0${momcount}.png`;
        if (momcount >= 8) {
            momcount = 1;
        } else {
            momcount++;
        }
    }, 150);
}

onMounted(() => {
    animateMom();
});

onUnmounted(() => {
    clearInterval(momInterval);
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