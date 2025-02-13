<template>
    <Container>
        <!-- Background Image -->
        <div>
            <img src="/public/images/03/02.webp" class="max-w-screen max-h-screen object-contain">
        </div>

        <div class="w-full h-full absolute top-0 left-0">
            <div @click="isOpen = !isOpen" class="absolute top-0 left-0 cursor-pointer">
                <img src="/public/images/03/03.webp">
            </div>

            <div v-if="isOpen" class="absolute top-0 left-0">
                <div class="relative">
                    <div>
                        <img src="/public/images/03/04.webp"> 
                    </div>

                    <div class="absolute top-0 left-0">
                        <img ref="clothes" src="/public/images/03/05.webp"> 
                    </div>

                    <div @mouseenter="clothes.src = `./images/03/09.webp`" @mouseleave="clothes.src = `./images/03/05.webp`" id="jeans" class="w-[14.5%] h-[65%] absolute top-[10%] left-[61%] ">
                        
                    </div>

                    <div @mouseenter="clothes.src = `./images/03/08.webp`" @mouseleave="clothes.src = `./images/03/05.webp`" id="shirt2" class="w-[14.5%] h-[65%] absolute top-[10%] left-[52%] ">
                        
                    </div>

                    <div @mouseenter="clothes.src = `./images/03/07.webp`" @mouseleave="clothes.src = `./images/03/05.webp`" id="shirt1" class="w-[14.5%] h-[65%] absolute top-[10%] left-[42%] ">
                        
                    </div>

                    <div @mouseenter="clothes.src = `./images/03/06.webp`" @mouseleave="clothes.src = `./images/03/05.webp`" id="purple" class="w-[10%] h-[25%] absolute top-[10%] left-[36%] ">
                        
                    </div>

                    <div @mouseenter="clothes.src = `./images/03/10.webp`" @mouseleave="clothes.src = `./images/03/05.webp`" id="stack" class="w-[15%] h-[28%] absolute top-[50%] left-[36%] ">
                        
                    </div>
                </div>
            </div>
        </div>

        <div @click="$emit('nextpage')" class="absolute right-[6.3%] bottom-[5.2%] w-[7.5%] cursor-pointer">
            <img src="/public/images/13/button-R.png">
        </div>

    </Container>
</template>

<script setup>
const isOpen = ref(false)
const clothes = ref(null)

</script>

<style scoped>

</style>