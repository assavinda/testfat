<template>
    <Container ref="container" class="object-cover">
        <div>
            <img :src="images['13-com00-02.png']" class="max-w-screen max-h-screen object-contain opacity-0">
        </div>
        <div ref="scrollContainer" class="flex absolute top-0 left-0 w-[200%] overflow-x-scroll overflow-y-hidden">
            <section>
                <div>
                    <img :src="images['13-com00-02.png']" class="max-w-screen max-h-screen object-contain">
                </div>

                <div v-if="currentScreen === 'goobby'" class="absolute top-0 left-0 w-[50%]">
                    <div>
                        <img :src="images['13-com04-02.png']">
                    </div>

                    <div @click="setScreen('searchResult')" class="absolute top-[39.5%] left-[39%] w-[2%] hover:scale-[1.2] cursor-pointer clickhere">
                        <img  :src="images['13-search_other.png']">
                    </div>
                </div>

                <div v-if="currentScreen === 'searchResult'" class="absolute top-0 left-0 w-[50%]">
                    <div class="relative">
                        <div>
                        <img :src="images['13-com03-02.png']"> 
                        </div>

                        <div @click="websiteIsOpen = !websiteIsOpen" class="absolute top-[20%] left-[24%] w-[44%] h-[42%] flex flex-col cursor-pointer">
                            <div @click="setWeb(0)" class="w-full h-[68%]"></div>
                            <div @click="setWeb(1)" class="w-full h-[68%]"></div>
                            <div @click="setWeb(2)" class="w-full h-full"></div>
                        </div>
                        
                    </div>
                </div>

                <div v-if="websiteIsOpen" class="absolute top-0 left-0 z-10 w-[50%]">
                    <div>
                        <img :src="images['13-black-02.png']"> 
                    </div>

                    <div class="absolute top-0 left-0">
                        <img v-if="currentWebIndex === 0" :src="images['13-inBU1-02.png']"> 
                        <img v-if="currentWebIndex === 1" :src="images['13-inPK2-02.png']"> 
                        <img v-if="currentWebIndex === 2" :src="images['13-inYW3-02.png']"> 
                    </div>

                    <div @click="websiteIsOpen = !websiteIsOpen;" class="absolute w-[5%] top-[5%] right-[5%] cursor-pointer">
                        <img :src="images['13-x-02.png']"> 
                    </div>

                    <div @click="currentWebIndex != 0 ? setWeb(currentWebIndex - 1) : setWeb(2)" class="absolute top-[46%] left-[2%] w-[5%] cursor-pointer">
                        <img :src="images['13-L1-02.png']"> 
                    </div>

                    <div @click="currentWebIndex != 2 ? setWeb(currentWebIndex + 1) : setWeb(0)" class="absolute top-[46%] right-[2%] w-[5%] cursor-pointer">
                        <img :src="images['13-R1-02.png']"> 
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <img :src="images['13-maz01-01.png']" class="max-w-screen max-h-screen object-contain">
                </div>

                <div class="absolute bottom-0 left-[142%] w-[8%]">
                    <img :src="images['13-maz00-01.png']">
                </div>

                <div @click="openMagazine" class="absolute bottom-0 left-[67%] w-[15%] cursor-pointer">
                    <img :src="images['13-maz00-01.png']">
                </div>

                <div ref="magazine" class="absolute top-0 left-[50%] perspective-[1000px] hidden z-10 w-[50%]">

                    <!-- page 1 -->
                    <div class="absolute top-0 left-0 w-[53.05%]">
                        <div>
                        <img :src="images['13-P1-P1_L.png']"> 
                        </div>
                        <div ref="model01" class="absolute top-[10%] w-[40%] models-left pointer-events-none" :style="{ left: 49 + '%' }">
                            <img :src="images['13-P1-01-P1_L.png']"> 
                        </div>
                        <div ref="model02" class="absolute top-[54%] w-[40%] models-left pointer-events-none" :style="{ left: 49 + '%' }">
                            <img :src="images['13-P1-02-P1_L.png']"> 
                        </div>
                        <div class="absolute top-[0.9%] left-[57.45%] w-[36.8%] pointer-events-none">
                            <img :src="images['13-P1-03-P1_L.png']"> 
                        </div>
                        <div @click="model01.style.left == '49%' ? model01.style.left = '23%' : model01.style.left = '49%'" class="absolute top-[24.5%] left-[23%] w-[35%] h-[7%]   z-[11] cursor-pointer"></div>
                        <div @click="model02.style.left == '49%' ? model02.style.left = '23%' : model02.style.left = '49%'" class="absolute top-[72%] left-[23%] w-[35%] h-[7%]   z-[11] cursor-pointer"></div>
                    </div>
                    <!-- page 4 -->
                    <div class="absolute top-0 right-0">
                        <div>
                            <img :src="images['13-P2-0-01.png']">
                        </div>

                        <div class="absolute top-0 right-0 pointer-events-none">
                            <img :src="images['13-P2-R-01.png']">
                        </div>

                        <!-- vinyl -->
                        <div ref="vinyl" class="absolute top-[14%] right-[5.5%] w-[40%] pointer-events-none">
                            <div>
                                <img :src="images['13-P2-R-02.png']">
                            </div>
                            <div ref="vmodel05" class="absolute top-[64%] left-[37%] w-[23%] ">
                                <img :src="images['13-P2-v5.png']">
                            </div>
                            <div ref="vmodel04" class="absolute top-[44%] left-[65%] w-[26%] ">
                                <img :src="images['13-P2-v4.png']">
                            </div>
                            <div ref="vmodel03" class="absolute top-[6%] left-[56%] w-[21%] ">
                                <img :src="images['13-P2-v3.png']">
                            </div>
                            <div ref="vmodel02" class="absolute top-[8%] left-[22%] w-[19%] ">
                                <img :src="images['13-P2-v2.png']">
                            </div>
                            <div ref="vmodel01" class="absolute top-[42%] left-[7%] w-[26%] ">
                                <img :src="images['13-P2-v1.png']">
                            </div>
                        </div>

                        <!-- เข็ม -->
                        <div @mousedown="startDrag" ref="needle" class="absolute top-[20%] right-[1.4%] w-[4.4%] origin-bottom cursor-pointer" :style="{ rotate: `-${needleRotation}deg`}">
                            <img :src="images['13-P2-01_P2_R.png']">
                        </div>

                        <div class="absolute top-[60%] right-[2.3%] w-[4.5%] pointer-events-none">
                            <img :src="images['13-P2-02_P2_R.png']">
                        </div>

                        <div @click="showPostit" class="absolute right-[4%] bottom-[2.3%] w-[5.3%] cursor-pointer">
                            <img :src="images['13-button-R.png']">
                        </div>
                    </div>
                    
                    <div class="pages w-full absolute top-0 left-0 z-[12]" :class="{ '-rotate-y-180': isFlipped }">
                        <!-- page 3 -->
                        <div class="absolute top-0 right-0 backface-hidden -rotate-y-180 w-[53%]">
                            <div>
                                <img :src="images['13-P2-P2_L.png']">
                            </div>
                            <div ref="model04" class="absolute top-[10%] w-[40%] models-left pointer-events-none" :style="{ left: 49 + '%' }">
                                <img :src="images['13-P2-01_P2_L.png']"> 
                            </div>
                            <div ref="model05" class="absolute top-[54%] w-[40%] models-left pointer-events-none" :style="{ left: 49 + '%' }">
                                <img :src="images['13-P2-02_P2_L.png']"> 
                            </div>
                            <div class="absolute top-[0.9%] left-[58.6%] w-[35.85%] pointer-events-none">
                                <img :src="images['13-P2-P2_L-02.png']"> 
                            </div>
                            <div @click="model04.style.left == '49%' ? model04.style.left = '23%' : model04.style.left = '49%'" class="absolute top-[24.5%] left-[23%] w-[35%] h-[7%] z-[11] cursor-pointer"></div>
                            <div @click="model05.style.left == '49%' ? model05.style.left = '23%' : model05.style.left = '49%'" class="absolute top-[68.5%] left-[23%] w-[35%] h-[7%] z-[11] cursor-pointer"></div>
                            <div @click="flipPage" class="absolute left-[4%] bottom-[2.3%] w-[10%] cursor-pointer">
                                <img :src="images['13-button-L.png']"> 
                            </div>
                        </div>

                        <!-- page 2 -->
                        <div ref="page2" class="absolute top-0 right-0 backface-hidden w-[50.1%]">
                            <div>
                                <img :src="images['13-P1-P1_R.png']"> 
                            </div>
                            <div ref="model03" class="absolute left-[38%] w-[24%] models-up pointer-events-none" :style="{ bottom: 6 + '%' }">
                                <img :src="images['13-P1-01-P1_R.png']">
                            </div>
                            <div class="absolute bottom-0 left-[22%] w-[56%] pointer-events-none">
                                <img :src="images['13-P1-02-P1_R.png']">
                            </div>
                            <div @click="model03.style.bottom == '6%' ? model03.style.bottom = '40%' : model03.style.bottom = '6%'" class="absolute bottom-[49%] left-[44.25%] w-[10%] h-[43%]   z-[11] cursor-pointer"></div>
                            <div @click="flipPage" class="absolute right-[4%] bottom-[2.3%] w-[10.8%] cursor-pointer">
                                <img :src="images['13-button-R.png']">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div @click="scrollToEnd" :class="{ 'pointer-events-none' : isAtEnd }" class="absolute top-[26%] left-[84%] w-[10%] hover:scale-[1.2] cursor-pointer clickhere" :style="{opacity: arrowOpacity}">
            <img :src="images['13-01-02.png']">
        </div>

        <div @click="scrollToStart" :class="{ 'pointer-events-none' : !isAtEnd }" class="absolute top-[26%] right-[84%] w-[10%] hover:scale-[1.2] cursor-pointer rotate-180 clickhere" :style="{opacity: 1 - arrowOpacity}">
            <img :src="images['13-01-02.png']">
        </div>

        <div ref="postit" class="absolute top-0 left-[0%] backdrop-blur-sm hidden z-[100]">
            <div class="cursor-pointer">
                <div v-if="postimg == 'yw01'" @click="postimg = 'yw02';console.log(postimg)">
                    <img :src="images['13-yw-01.png']">
                </div>
                <div v-else @click="$emit('nextpage')">
                    <img :src="images['13-yw-02.png']">
                </div>
            </div>
        </div>
    </Container>
    
</template>

<script setup>
const images = inject("preloadedImages");
const currentScreen = ref('goobby')
const currentWebIndex = ref('none')
const websiteIsOpen = ref(false)

const magazine = ref(null)
const model01 = ref(null)
const model02 = ref(null)
const model03 = ref(null)
const model04 = ref(null)
const model05 = ref(null)

const page2 = ref(null)
const vinyl = ref(null)
const vmodel01 = ref(null)
const vmodel02 = ref(null)
const vmodel03 = ref(null)
const vmodel04 = ref(null)
const vmodel05 = ref(null)

const postit = ref(null)
const postimg = ref('yw01')

function showPostit() {
    postit.value.classList.remove('hidden')
}


const scrollPosition = ref(0);
const scrollContainer = ref(null);
const isScrollLocked = ref(false);


const arrowOpacity = ref(1)
const isAtEnd = ref(false)

const container = ref(null)
let containerBounds = null;

function getBound() {
    const containerElement = container.value?.$el || container.value;
    container.value = containerElement.getBoundingClientRect();
    containerBounds = containerElement.getBoundingClientRect();
}

onMounted(() => {
    const handleScroll = (event) => {
        if (scrollContainer.value && !isScrollLocked.value) {
            event.preventDefault();
            scrollContainer.value.scrollLeft += event.deltaY;
        }
    };

    const updateScrollPosition = () => {
        if (scrollContainer.value && !isScrollLocked.value) {
            const maxScrollLeft = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;
            const scrollPercent = maxScrollLeft > 0 ? scrollContainer.value.scrollLeft / maxScrollLeft : 0;
            
            scrollPosition.value = scrollPercent * 100;
            arrowOpacity.value = Math.max(0, 1 - scrollPercent);
        }
    };

    scrollContainer.value?.addEventListener('wheel', handleScroll, { passive: false });
    scrollContainer.value?.addEventListener('scroll', updateScrollPosition);

    onUnmounted(() => {
        scrollContainer.value?.removeEventListener('wheel', handleScroll);
        scrollContainer.value?.removeEventListener('scroll', updateScrollPosition);
    });
});


function scrollToEnd() {
    if (scrollContainer.value) {
        scrollContainer.value.scrollTo({
            left: scrollContainer.value.scrollWidth,
            behavior: "smooth"
        });
    }
}

function scrollToStart() {
    if (scrollContainer.value) {
        scrollContainer.value.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
}

watch(scrollPosition, (newValue) => {
    isAtEnd.value = newValue === 100;
});

//Computer
function setScreen(screenName) {
  currentScreen.value = screenName;
}

function setWeb(index) {
  currentWebIndex.value = index;
}

//Magazine
const isFlipped = ref(false)

function flipPage() {
    isFlipped.value = !isFlipped.value
    if (isFlipped.value) {
        page2.value.classList.add('pointer-events-none')
    }
    else if (!isFlipped.value) {
        page2.value.classList.remove('pointer-events-none')
    }
}

function openMagazine() {
    scrollToEnd();
    magazine.value.classList.remove('hidden')
    scrollContainer.value.classList.add('overflow-x-hidden')
    scrollContainer.value.classList.remove('overflow-x-scroll')
    setTimeout(() => {
        isScrollLocked.value = true; 
    },500)
}

const needle = ref(null);
let isDragging = false;
const needleRotation = ref(0);

const startDrag = (e) => {
  isDragging = true;

  containerBounds == null ? getBound() : console.log('gotten');

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', stopDrag);
};

const onMouseMove = (e) => {
  if (!isDragging) return;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const dpcX = (clientX - container.value.left) / container.value.width * 100;
  console.log(needleRotation.value)
  if (needleRotation.value < 66) {
    needleRotation.value = (100 - dpcX) * 3
  }
  else {
    stopDrag()
    vinyl.value.classList.add('vinyl-rotate')
    vmodel01.value.classList.add('vinyl-models-rotate')
    vmodel02.value.classList.add('vinyl-models-rotate')
    vmodel03.value.classList.add('vinyl-models-rotate')
    vmodel04.value.classList.add('vinyl-models-rotate')
    vmodel05.value.classList.add('vinyl-models-rotate')
  }
};

const stopDrag = () => {
  isDragging = false;

  // Remove the event listeners
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', stopDrag);
};


</script>

<style scoped>
.pages {
    transform-origin: center;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

::-webkit-scrollbar {
    display: none;
}

.scrollContainer {
    -ms-overflow-style: none; 
    scrollbar-width: none;
}

.models-left {
    transition: left 0.5s ease;
}

.models-up {
    transition: bottom 0.5s ease;
}

@keyframes vinyl-rotate {
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
}

@keyframes hi-light {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}

.clickhere {
    animation: hi-light alternate infinite 0.5s ease;
}

.vinyl-rotate {
    animation: vinyl-rotate infinite 3s linear;
}

.vinyl-models-rotate {
    animation: vinyl-rotate infinite 3s linear reverse;
    transform-origin: center;
}

.mask {
    -webkit-mask-image: url(/public/images/maskimage.png);
    mask-image: url(/public/images/maskimage.png);
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
}

/* section {
  flex: 0 0 100vw;
  height: 100vh;
  scroll-snap-align: start;
}

.scroll-container {
  display: flex;
  width: 100vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
} */

</style>