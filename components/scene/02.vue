<template>
    <Container class="object-cover relative">
        <!-- Background Image -->
        <div>
            <img src="/public/images/02/room-01.png" class="max-w-screen max-h-screen object-contain">
        </div>

        <!-- Scrollable Container -->
        <div ref="scrollContainer" class="absolute top-0 left-0 w-full h-full overflow-y-scroll scroll-smooth mask">

            <div class="w-full h-full">

            </div>

            <div class="flex flex-col w-full">

                <div>
                    <img class="w-[40%]" src="/public/images/02/textroom01.png">
                </div>

                <div class="flex justify-end">
                    <img class="w-[40%]" src="/public/images/02/textroom02.png">
                </div>

                <div>
                    <img class="w-[40%]" src="/public/images/02/textroom03.png">
                </div>

                <div class="flex justify-end">
                    <img class="w-[40%]" src="/public/images/02/textroom04.png">
                    <div class="absolute top-[210%] left-[55%] w-[40%]">
                        <img src="/public/images/02/textroom05.png">
                    </div>
                </div>

                <div>
                    <img class="w-[40%]" src="/public/images/02/textroom07.png">
                </div>

                <div class="flex justify-end">
                    <div class="absolute top-[230%] left-[52%] w-[53%]">
                        <img src="/public/images/02/textroom06.png">
                    </div>
                </div>
            </div>

            <div @click="$emit('nextpage')" class="w-full h-[120%]">

            </div>
        </div>
    </Container>
</template>

<script>

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
    -webkit-mask-image: url(/public/images/maskimage.png);
    mask-image: url(/public/images/maskimage.png);
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
}
</style>
