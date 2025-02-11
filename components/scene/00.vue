<template>
    <Container>
        <div>
            <img src="/images/00/cover01.png" class="max-w-screen max-h-screen object-contain">
        </div>

        <div class="absolute top-0 left-0">
            <img src="/images/00/cover0.png">
        </div>

        <div class="absolute top-0 left-0">
            <img src="/images/00/cover2.png">
        </div>

        <div @click="showSuggestion" class="absolute top-[80%] left-[44%] w-[10%] hover:scale-[1.2] cursor-pointer">
            <img src="/images/00/cover3.png">
        </div>

        <div ref="suggestion" class="absolute top-0 left-[0%] backdrop-blur-sm hidden">
            <img src="/images/00/suggestion01.png">
            <div @click="$emit('start')" class="absolute top-[63%] left-[45.5%] w-[10%] hover:scale-[1.2] cursor-pointer">
                <img src="/images/00/suggestion02.png">
            </div>
            
        </div>
    </Container>
</template>

<script setup>
const suggestion = ref(null)
function showSuggestion() {
    suggestion.value.classList.remove('hidden')
}
</script>

<style scoped>

</style>