<template>
    <Container class="object-cover relative">
        <!-- Background Image -->
        <div>
            <img :src="images['02-room-01.png']" class="max-w-screen max-h-screen object-contain">
        </div>

        <!-- Scrollable Container -->
        <div ref="scrollContainer" @scroll="handleScroll" class="absolute top-0 left-0 w-full h-full overflow-y-scroll scroll-smooth mask">
            <div class="w-full h-full"></div>

            <div class="w-full h-[120%]">
                <div class="relative w-full h-full">
                    <div class="absolute top-0 left-0 w-[35%] textroom">
                        <img :src="images['02-textroom01.png']">
                    </div>
                    <div class="absolute top-[7%] right-[4%] w-[35%] textroom">
                        <img :src="images['02-textroom02.png']">
                    </div>
                    <div class="absolute top-[22%] left-[4%] w-[35%] textroom-r">
                        <img :src="images['02-textroom03.png']">
                    </div>
                    <div class="absolute top-[29%] right-[8%] w-[35%] textroom">
                        <img :src="images['02-textroom04.png']">
                    </div>
                    <div class="absolute top-[43%] right-[14%] w-[35%] textroom-r">
                        <img :src="images['02-textroom05.png']">
                    </div>
                    <div class="absolute top-[50%] left-[4%] w-[35%] textroom">
                        <img :src="images['02-textroom07.png']">
                    </div>
                    <div class="absolute top-[58%] right-[1%] w-[50%] textroom-r">
                        <img :src="images['02-textroom06.png']">
                    </div>
                </div>
                
            </div>

            <div class="w-full h-[120%]"></div>
        </div>

        <div ref="click" @click="$emit('nextpage')" class="w-[40%] h-[80%] absolute left-[30%] top-0 cursor-pointer hidden">

        </div>

        <div class="w-[120%] h-[60%] absolute left-[-10%] top-[-5%] bg-black blur-sm eye-top"></div>

        <div class="w-[120%] h-[60%] absolute left-[-10%] bottom-[-5%] bg-black blur-sm eye-bottom"></div>
    </Container>
</template>

<script setup>
const images = inject("preloadedImages");
const scrollContainer = ref(null);
const click = ref(null);


const handleScroll = () => {
    if (!scrollContainer.value) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        scrollContainer.value.classList.remove('overflow-y-scroll')
        scrollContainer.value.classList.add('hidden')
        click.value.classList.remove('hidden')
    }
};


onMounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener("scroll", handleScroll);
    }
});
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

.scrollContainer {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.mask {
    -webkit-mask-image: url(/images/maskimage.png);
    mask-image: url(/images/maskimage.png);
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
}

@keyframes openeyetop {
    0% {
        top: -5%;
    }
    50% {
        top: -45%;
    }
    65% {
        top: -15%;
    }
    100% {
        top: -65%;
    }
}

@keyframes openeyebottom {
    0% {
        bottom: -5%;
    }
    50% {
        bottom: -45%;
    }
    65% {
        bottom: -15%;
    }
    100% {
        bottom: -65%;
    }
}

.eye-top {
    animation: openeyetop 3s ease-out forwards;
}

.eye-bottom {
    animation: openeyebottom 3s ease-out forwards;
}

@keyframes text-motion {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.025);
    }
}

.textroom {
    animation: text-motion infinite alternate 0.8s ease-in-out;
}

.textroom-r {
    animation: text-motion infinite alternate-reverse 0.8s ease-in-out;
}
</style>
