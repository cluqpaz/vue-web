<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import { Badge } from '@/components/ui/badge';
import { useFavoritosStore } from '@/stores/useFavoritos';
import { Heart } from '@lucide/vue';
import { storeToRefs } from 'pinia';

const favoritosStore = useFavoritosStore()
const { totalFavoritos } = storeToRefs(favoritosStore)

</script>

<template>
    
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header class="bg-simpsons-yellow w-full border border-black">
            <div class="flex flex-col md:flex-row justify-between items-center p-3 mx-auto max-w-page md:px-20">
                <LogoSimpsons estilus="w-[8rem] h-auto"/>
               
                <div class="flex gap-6 pt-3">
                    <RouterLink
                        to="/simpsons/favoritos"
                        active-class="font-bold"
                        class="relative flex items-center gap-1"
                    >
                        <Heart class="w-4 h-4"/>
                        Favorites
                        <Badge variant="destructive" class="h-5 w-5 absolute -top-2 -right-2.5">
                            {{ totalFavoritos }}
                        </Badge>
                        
                    </RouterLink>
                    <RouterLink
                        to="/simpsons/gallery"
                        active-class="font-bold"
                    >
                        Characters
                    </RouterLink>
                    <RouterLink 
                        to="/simpsons/about" 
                        active-class="font-bold"
                    >
                        About
                    </RouterLink>
                    <Button variant="tertiarius" size="elongatis" class="bg-simpsons-red border-2 border-black pr-3 pl-3 hover:bg-simpsons-yellow focus:bg-simpsons-yellow">
                        <RouterLink to="/">Exit</RouterLink>
                    </Button>
                </div>
            </div>
        </header>
           
        <main>
            <RouterView />
        </main>
        
        <footer class="bg-simpsons-yellow text-center py-6 w-full border border-black">
            <div>
                <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
            </div>

            <small>
                This app was done by Fernando Cordón
            </small>
        </footer>
    </div>
</template>

<style scoped>

</style>