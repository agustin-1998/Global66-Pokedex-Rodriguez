<template>
    <figure class="cursor-poiner hover:opacity-80 inline-block place-self-end">
        <!-- use the v-show to not render a new img, just hide it -->
        <img :src="disabled" v-show="pokemon?.isFavorite === false" alt="arrow-down" width="44" @click="favPokemon(pokemon)">
        <img :src="active" v-show="pokemon?.isFavorite === true" alt="arrow-down" width="44" @click="removeFavPokemon(pokemon)">
    </figure>
</template>

<script setup>
    import disabled from '../assets/img/Disabled.png';
    import active from '../assets/img/Active.png';
    import { useStore } from 'vuex';
    import { defineProps, computed } from 'vue';
    import Swal from 'sweetalert2';
    
    const store = useStore();

    const { pokemon } = defineProps({
        pokemon: {
            type: Object,
            required: true,
        },
    });

    const favPokemon = (pokemon) => {
        store.commit('setFavoriteList', pokemon.name);
        Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Added to favorites',
                position: 'top-end',
                timer: 2500,
                showConfirmButton: false,
                timerProgressBar: true,
            })

    };

    const removeFavPokemon = (pokemon) => {
        store.commit('removeFavoriteList', pokemon.name);
        Swal.fire({
                toast: true,
                icon: 'warning',
                title: 'Removed from favorites',
                position: 'top-end',
                timer: 2500,
                showConfirmButton: false,
                timerProgressBar: true,
            })
        const pokemons = computed(() => store.getters.getFavorites);
        return pokemons;
    };
</script>

<style>
    
</style>