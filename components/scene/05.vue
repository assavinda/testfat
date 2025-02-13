<template>
    <Container>
        <!-- Background Image -->
        <div>
            <img src="/public/images/01/textเปิด01.png" class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <div ref="bgbox" class="absolute w-full h-full left-0 top-0 pointer-events-none appear">
            <div>
                <img src="/public/images/05/eat1-01.png">
            </div>
            <div class="absolute top-0 left-0">
                <img class="momspeak" src="/public/images/05/eatm01.png">
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
const scrollContainer = ref(null);
const scrollPercent = ref(0);
const bgbox = ref(null)
const tired = ref(null)

const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    console.log(`Scrolled: ${scrollPercent.value}%`);
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

@keyframes momspeak {
    0% {
        content: url('./images/05/eatm01.png');
    }
    12.5% {
        content: url('./images/05/eatm02.png');
    }
    25% {
        content: url('./images/05/eatm03.png');
    }
    37.5% {
        content: url('./images/05/eatm04.png');
    }
    50% {
        content: url('./images/05/eatm05.png');
    }
    62.5% {
        content: url('./images/05/eatm06.png');
    }
    75% {
        content: url('./images/05/eatm07.png');
    }
    100% {
        content: url('./images/05/eatm08.png');
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

.momspeak {
    animation: momspeak infinite alternate 2s ease-in-out;
}
</style>