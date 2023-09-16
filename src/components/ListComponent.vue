<template>
    <section class="w-full mt-10 mb-14">
        <ul class="w-full space-y-3" v-if="pokemons.length > 0">
            <li v-for="(pokemon, index) in pokemons" :key="index" class="w-full grid grid-cols-7 cursor-pointer rounded-md bg-white pr-2 py-1 transition-colors 0.2s hover:bg-gray-bf" data-aos="fade-up">
                <h2 class="col-span-6 flex items-center justify-start font-semibold w-full h-full capitalize ml-4 mr-2" @click="openModal(pokemon)">{{ pokemon.name }}</h2> 
                <favorite-component :pokemon="pokemon"/>
            </li>
        </ul>

        <EmptyComponent v-else />
    </section>
</template>

<script setup>
    import { computed, onMounted, ref, defineProps } from 'vue';
    import { useStore } from 'vuex';
    import bgPokemon from '../assets/img/fondoPokemon.png';
    import EmptyComponent from './EmptyComponent.vue';
    import FavoriteComponent from './FavoriteComponent.vue';
    import Swal from 'sweetalert2'
    import disabled from '../assets/img/Disabled.png';
    import active from '../assets/img/Active.png';

    const store = useStore();

    const { pokemons } = defineProps({
        pokemons: {
            type: Array,
            required: true,
        },
    });

    //if refresh the page, fetch the pokemons again
    onMounted(() => {
        if (pokemons.length === 0) {
            store.dispatch('fetchPokemons');
        }
    });

    const openModal = async (pokemon) => {
        await store.dispatch('fetchPokemon', pokemon.name.toLowerCase());
        const modalData = computed(() => store.getters.getPokemon);
        const types = modalData.value?.types.map((type) => type.type.name).join(', ');

        Swal.fire({
            html:
                `<section class="relative bg-center bg-no-repeat bg-cover h-[13rem]" style="background-image: url(${bgPokemon})">` +
                    '<div class="flex items-center justify-center w-full pt-7">' +
                        '<img src='+ modalData.value?.sprites?.other["official-artwork"]?.front_default +' alt="pokemon-img" width="180" class="mx-auto text-center">' +
                    '</div>' +
                '</section>' +
                `<section class="flex flex-col items-start justify-center mt-4 mx-4 mb-4 space-y-3"> ` +
                    `<p class="text-lg font-light capitalize"><span class="font-semibold">Name: </span> ${modalData.value?.name}</p>` +
                    `<span class="border border-gray-100 w-full block"></span>` +
                    `<p class="text-lg font-light capitalize"><span class="font-semibold">Weight: </span> ${modalData.value?.weight}</p>` +
                    `<span class="border border-gray-100 w-full block"></span>` +
                    `<p class="text-lg font-light capitalize"><span class="font-semibold">Height: </span> ${modalData.value?.height}</p>` +
                    `<span class="border border-gray-100 w-full block"></span>` +
                    `<p class="text-lg font-light capitalize"><span class="font-semibold">Type: </span> ${types}</p>` +
                    `<span class="border border-gray-100 w-full block"></span>` +
                `</section>` +
                `<section class="flex items-center justify-between m-4 mb-0">` +
                    `<button class="bg-red hover:bg-red-hover transition-all 0.2s text-white py-2 px-4 rounded-full" id="share">Share to my friends</button>` +
                    `<figure class="cursor-poiner hover:opacity-80 inline-block col-span-1 place-self-end"> `+
                        `<img src="${disabled}" alt="arrow-down" width="44" id="disabled">`+
                        `<img src="${active}" alt="arrow-down" width="44" id="active">`+
                    '</figure>' +
                `</section>`,
            showCloseButton: true,
            showConfirmButton: false,
            showCancelButton: false,
        })

        const activeImg = document.getElementById('active');
        const disabledImg = document.getElementById('disabled');

        if (modalData.value?.isFavorite === true) {
            activeImg.style.display = 'block';
            disabledImg.style.display = 'none';
        } else {
            activeImg.style.display = 'none';
            disabledImg.style.display = 'block';
        }

        activeImg.addEventListener('click', () => {
            activeImg.style.display = 'none';
            disabledImg.style.display = 'block';
            store.commit('removeFavoriteList', modalData.value?.name);
            Swal.fire({
                toast: true,
                icon: 'warning',
                title: 'Removed from favorites',
                position: 'top-end',
                timer: 2500,
                showConfirmButton: false,
                timerProgressBar: true,
            })
        });

        disabledImg.addEventListener('click', () => {
            activeImg.style.display = 'block';
            disabledImg.style.display = 'none';
            store.commit('setFavoriteList', modalData.value?.name);
            Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Added to favorites',
                position: 'top-end',
                timer: 2500,
                showConfirmButton: false,
                timerProgressBar: true,
            })
        });

        const share = document.getElementById('share');
        share.addEventListener('click', () => {
            Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Copied to clipboard',
                position: 'top-end',
                timer: 2500,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            const pokeObject = {
                name: modalData.value?.name,
                weight: modalData.value?.weight,
                height: modalData.value?.height,
                type: types,
            }
            return navigator.clipboard.writeText(
				`${pokeObject.name}, ${pokeObject.weight}, ${pokeObject.height}, ${pokeObject.type}`
			);
        });
    }

</script>

<style>
    .swal2-html-container {
        margin: 0 !important;
        border-top-left-radius: 5px !important;
        border-top-right-radius: 5px !important;
    }

    .swal2-close{
        position: relative;
        color: skyblue;
        font-size: 1.5rem;
        font-weight: 700;
        background-color: #ffffffff;
        border-radius: 50%;
        padding: 0.1rem;
        top: 0.5rem;
        right: 0.5rem;
        border: 2px solid skyblue;
    }

    .swal2-close:hover{
        background-color: rgb(220, 220, 220);
    }
</style>