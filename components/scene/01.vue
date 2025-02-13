<template>
    <Container>
        <!-- Background Image -->
        <div>
            <img src="/public/images/01/textเปิด01.png" class="max-w-screen max-h-screen object-contain opacity-0">
        </div>

        <!-- Scrollable Container -->
        <div 
            ref="scrollContainer" 
            @scroll="handleScroll" 
            class="absolute top-0 left-0 w-full h-[500%] overflow-y-scroll scroll-smooth"
        >
            <div class="w-full h-full"></div>
            <div class="w-full h-full"></div>
            <div class="w-full h-full"></div>
        </div>

        <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div id="text-box" class="relative w-full h-full">
                <template v-for="(item, index) in elements" :key="index">
                    <p v-if="item.type === 'text'" 
                       :class="{'opacity-100': scrollPercent >= index * 8, 'opacity-0': scrollPercent < index * 8}"
                       class="text-font font-medium absolute transition-opacity duration-700"
                       :style="{ top: item.top, left: item.left }">
                        {{ item.content }}
                    </p>

                    <img v-else-if="item.type === 'image'"
                         :src="item.src"
                         :alt="item.alt"
                         :class="{'opacity-100': scrollPercent >= index * 8, 'opacity-0': scrollPercent < index * 8}"
                         class="absolute transition-opacity duration-700"
                         :style="{ top: item.top, left: item.left, width: item.width }">
                </template>
            </div>
        </div>

        <div class="absolute top-0 left-0 w-full h-full bg-black pointer-events-none transition-opacity duration-700" :class="{'opacity-100': isAtEnd, 'opacity-0': !isAtEnd}"></div>
    </Container>
</template>

<script setup>

const scrollContainer = ref(null);
const scrollPercent = ref(0);
const isAtEnd = ref(false)

let emit = defineEmits()

const elements = ref([
    { type: "text", content: " ", top: "0%", left: "0%" },
    { type: "text", content: "ทุกวันของปุ๊กลุก", top: "17.2%", left: "38.5%" },
    { type: "text", content: "ได้เจอการถูกบูลลี่เรื่องการแต่งตัว", top: "28.2%", left: "18%" },
    { type: "text", content: "รูปร่างที่อ้วน", top: "28.2%", left: "65.5%" },
    { type: "text", content: "จากคนรอบข้าง", top: "39.2%", left: "13%" },
    { type: "text", content: "สังคมที่ทำงาน", top: "39.2%", left: "36%" },
    { type: "text", content: "แม้กระทั่ง....", top: "39.2%", left: "57.2%" },
    { type: "text", content: "ครอบครัว", top: "39.2%", left: "72.5%" },
    { type: "text", content: "เธอต้องอดทนถูกกระทำแบบนี้", top: "50.2%", left: "20.2%" },
    { type: "text", content: "ซ้ำ ๆ ทุกวัน", top: "50.2%", left: "62.5%" },
    { type: "text", content: "จนทำให้เธอขาดความมั่นใจ", top: "61.2%", left: "31.5%" },
    { type: "text", content: "ไม่กล้าที่จะแต่งตัวในแบบ", top: "72.2%", left: "22.5%" },
    { type: "image", src: "./images/01/textเปิด12.png", alt: "Image 4", top: "-0.4%", left: "0%", width: "100%" },
]);



const handleScroll = () => {
    if (!scrollContainer.value) return;

    const scrollTop = scrollContainer.value.scrollTop;
    const scrollHeight = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    
    scrollPercent.value = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    console.log(`Scrolled: ${scrollPercent.value}%`);
    if (scrollPercent.value >= 100) {
        setTimeout(() => {
            isAtEnd.value = true
        },2000)
        setTimeout(() => {
            emit('nextpage')
        },3000)
        console.log('end')
    }
};

onMounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', handleScroll);
    }
});
</script>

<style scoped>
p {
        font-size: 6.04444444vh;
}

@media (max-aspect-ratio: 16/9) {
    p {
        font-size: 3.4vw;
    }
}
</style>
