<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

</script>

<template>
    <div class="flex flex-col items-center gap-8 w-full max-w-page my-8 mx-auto">
        <div class="text-center">
            <h1 class="font-bold text-xl lg:text-5xl mb-5">
                The Simpsons Quote App
            </h1>
            <p class="mb-5">Click on the quote of your favorite character</p>
        </div>

        <Card>
            <CardContent>
                <img src="/imagines/simpsons/homer.png">
            </CardContent>
        </Card>
    </div>
</template>

<style scoped>

</style>