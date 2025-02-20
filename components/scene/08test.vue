<template>
    <Container>
        <div>
            <img :src="images['01-text01.png']"class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <div ref="bgbox" class="absolute w-full h-full left-0 top-0 pointer-events-none appear">
            <div class="opacity-0">
                <img :src="images['08-office1.png']">
            </div>
            <div ref="people" class="absolute right-[-17%] bottom-[-42%] w-[55%] opacity-0">
                <img :src="images['08-people.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img :src="images['08-office1.png']">
            </div>
            <div class="absolute top-0 left-0">
                <img ref="hand" :src="images[handCurrentFrame]">
            </div>
        </div>

        <!-- Scrollable Container -->
        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-[50%] mask" :class="isScrollLock == false ? 'overflow-y-scroll scroll-smooth' : '' ">
            <div class="w-full h-full"></div>
            <div class="w-full h-full"></div>
        </div>

        <div ref="textbox" class="absolute left-0 top-0 w-full h-full pointer-events-none">
            <div class="relative w-full h-full">
                <div ref="text01" class="absolute top-[0%] left-0 w-full h-full transition-transform duration-500 scale-[0]">
                    <div class="absolute top-0 left-[4%] w-[35%]">
                        <img :src="images['08-textoffice01.png']">
                    </div>
                    <div class="absolute top-[35%] left-[7%] w-[35%]">
                        <img :src="images['08-textoffice02.png']">
                    </div>
                    <div class="absolute top-[20%] right-[25%] w-[35%]">
                        <img :src="images['08-textoffice03.png']">
                    </div>
                </div>
            </div>
        </div>

        <div ref="shout" class="absolute top-0 left-[-1%] w-[101%] h-full transition-opacity duration-700 hidden">
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

const text01 = ref(null)

let emit = defineEmits()

let lastScrollTop = 0; // Track previous scroll position

const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    let newScrollPercent = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    // Ensure it starts from 99 when scrolling up
    if (newScrollPercent === 100 && scrollTop < lastScrollTop) {
        newScrollPercent = 99;
    }

    scrollPercent.value = newScrollPercent;
    lastScrollTop = scrollTop; // Update last scroll position

    console.log(scrollPercent.value)

    if (scrollPercent.value >= 100) {
        people.value.classList.add('peoplecome')
        people.value.classList.remove('opacity-0')
        text01.value.classList.remove('scale-[0]')
        text01.value.classList.add('scale-[1]')
        text01.value.classList.add('text-bubbles')
        setTimeout(() => {
            people.value.classList.remove('peoplecome')
            people.value.classList.add('peoplego');
            text01.value.classList.remove('scale-[1]')
            text01.value.classList.add('scale-[0]')
            setTimeout(() => {
                people.value.classList.remove('peoplego');
                people.value.classList.add('opacity-0')
                scrollToTop();
            },2000)
        },2000)
    }
};


const scrollToTop = () => {
    if (!scrollContainer.value) return;
    scrollContainer.value.style.overflow = "hidden"; // Disable manual scroll

    setTimeout(() => {
        scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            scrollContainer.value.style.overflow = ""; // Re-enable user scroll
        }, 500); // Adjust timing based on scroll speed
    }, 200);
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

@keyframes peoplego {
    0% {
        transform: translateX(0);
        bottom: -44%;
    }
    10% {
        transform: translateX(-20%);
        bottom: -42%;
    }
    15% {
        transform: translateX(-30%);
        bottom: -44%;
    }
    20% {
        transform: translateX(-40%);
        bottom: -42%;
    }
    25% {
        transform: translateX(-50%);
        bottom: -44%;
    }
    30% {
        transform: translateX(-60%);
        bottom: -42%;
    }
    35% {
        transform: translateX(-70%);
        bottom: -44%;
    }
    40% {
        transform: translateX(-80%);
        bottom: -42%;
    }
    45% {
        transform: translateX(-90%);
        bottom: -44%;
    }
    50% {
        transform: translateX(-100%);
        bottom: -42%;
    }
    55% {
        transform: translateX(-110%);
        bottom: -44%;
    }
    60% {
        transform: translateX(-120%);
        bottom: -42%;
    }
    65% {
        transform: translateX(-130%);
        bottom: -44%;
    }
    70% {
        transform: translateX(-140%);
        bottom: -42%;
    }
    75% {
        transform: translateX(-150%);
        bottom: -44%;
    }
    80% {
        transform: translateX(-160%);
        bottom: -42%;
    }
    85% {
        transform: translateX(-170%);
        bottom: -44%;
    }
    90% {
        transform: translateX(-180%);
        bottom: -42%;
    }
    95% {
        transform: translateX(-190%);
        bottom: -44%;
    }
    100% {
        transform: translateX(-200%);
        bottom: -42%;
    }
}

.peoplego {
    animation: peoplego 2s ease-in-out forwards;
}

@keyframes peoplecome {
    0% {
        bottom: -100%;
        opacity: 0;
    }
    100% {
        bottom: -42%;
        opacity: 1;
    }
}

.peoplecome {
    animation: peoplecome 0.5s ease-in-out forwards;
}
</style>