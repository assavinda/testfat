<template>
    <Container>
        <div>
            <img :src="images['01-text01.png']"class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <div ref="bgbox" class="absolute w-full h-full left-0 top-0 pointer-events-none appear">
            <div class="opacity-0">
                <img :src="images['08-office1.png']">
            </div>
            <div class="absolute bottom-[-42%] right-[-17%] w-[55%] transition-opacity duration-700" :class="{'opacity-100': scrollPercent >= 25, 'opacity-0': scrollPercent < 25}">
                <img ref="people" :src="images['08-people.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img ref="people" :src="images['08-office1.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img ref="hand" :src="images[handCurrentFrame]">
            </div>
        </div>

        <!-- Scrollable Container -->
        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-full mask" :class="isScrollLock == false ? 'overflow-y-scroll scroll-smooth' : '' ">
            <div class="w-full h-full"></div>
            <div class="w-full h-full">
                <div class="absolute top-[100%] left-0 w-full h-full">
                    <div class="absolute top-0 left-[4%] w-[35%] text-bubbles">
                        <img :src="images['08-textoffice01.png']">
                    </div>
                    <div class="absolute top-[35%] left-[7%] w-[35%] text-bubbles-r">
                        <img :src="images['08-textoffice02.png']">
                    </div>
                    <div class="absolute top-[20%] right-[25%] w-[35%] text-bubbles-r">
                        <img :src="images['08-textoffice03.png']">
                    </div>
                </div>
                <div class="absolute top-[160%] left-0 w-full h-full transition-opacity duration-700" :class="{'opacity-100': scrollPercent >= 40, 'opacity-0': scrollPercent < 40}">
                    <div class="absolute top-0 left-[5%] w-[35%] text-bubbles">
                        <img :src="images['08-textoffice04.png']">
                    </div>
                    <div class="absolute top-[15%] left-[15%] w-[35%] text-bubbles-r">
                        <img :src="images['08-textoffice06.png']">
                    </div>
                    <div class="absolute top-[-15%] right-[25%] w-[35%] text-bubbles-r">
                        <img :src="images['08-textoffice05.png']">
                    </div>
                </div>
                <div class="absolute top-[200%] left-0 w-full h-full transition-opacity duration-700" :class="{'opacity-100': scrollPercent >= 55, 'opacity-0': scrollPercent < 55}">
                    <div class="absolute top-[2%] left-[10%] w-[35%] text-bubbles-r">
                        <img :src="images['08-textoffice08.png']">
                    </div>
                    <div class="absolute top-[-18%] right-[22%] w-[35%] text-bubbles-r">
                        <img :src="images['08-textoffice09.png']">
                    </div>
                    <div class="absolute top-[-32%] right-[25%] w-[35%] text-bubbles">
                        <img :src="images['08-textoffice07.png']">
                    </div>
                    <div class="absolute top-[0%] right-[18%] w-[45%] text-bubbles">
                        <img :src="images['08-textoffice10.png']">
                    </div>
                </div>
            </div>
            <div class="w-full h-[120%]"></div>
        </div>

        <div ref="shout" class="absolute top-0 left-[-1%] w-[101%] h-full transition-opacity duration-700" :class="{'opacity-100': scrollPercent >= 100, 'opacity-0 pointer-events-none': scrollPercent < 100}">
            <div>
                <img :src="images['08-BGblack-01.png']">
            </div>
            <div class="absolute top-[0%] left-[10%] w-[35%] text-bubbles">
                <img :src="images['08-textstop01.png']">
            </div>
            <div class="absolute top-[20%] left-[50%] w-[35%] text-bubbles">
                <img :src="images['08-textstop04.png']">
            </div>
            <div class="absolute top-[40%] left-[15%] w-[35%] text-bubbles">
                <img :src="images['08-textstop02.png']">
            </div>
            <div class="absolute top-[50%] left-[50%] w-[35%] text-bubbles">
                <img :src="images['08-textstop03.png']">
            </div>
        </div>

        

    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const scrollContainer = ref(null)
const scrollPercent = ref(0)
const isScrollLock = ref(false)

const bgbox = ref(null)

const people = ref(null)
const shout = ref(null)

let emit = defineEmits()

const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    console.log(scrollPercent.value)

    if (scrollPercent.value >= 100) {
        isScrollLock.value = true
        setTimeout(() => {
            bgbox.value.classList.remove('appear')
            bgbox.value.classList.add('fade-out')
            shout.value.classList.add('fade-out')
        },3000)
        setTimeout(() => {
            emit('nextpage')
        },4500)
    }
};

const hand = ref(null)
const handCurrentFrame = ref('08-hand3.png')
let handInterval

function animateHand() {
    let handcount = 1;
    handInterval = setInterval(() => {
        handCurrentFrame.value = `08-hand${handcount}.png`;
        if (handcount >= 3) {
            handcount = 1;
        } else {
            handcount++;
        }
    }, 150);
}

onMounted(() => {
    animateHand()
});

onUnmounted(() => {
    clearInterval(handInterval);
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
</style>