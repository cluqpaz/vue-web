import { characters, type Character } from "@/paginae/Simpsons/data";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref<Character[]>([
        characters.find(character => character.id === 0)!, //Abe Simpsons
        characters.find(character => character.id === 4)!, //Homer Simpsons
        characters.find(character => character.id === 6)!, //Lisa Simpsons

        characters.find(character => character.id === 1)!, //BArt Simpsons
        characters.find(character => character.id === 2)! //MAggie Simpsons
    ])

    return {
        favoritos,
        totalFavoritos : computed(() => favoritos.value.length)
    }
})