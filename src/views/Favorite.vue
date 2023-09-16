<template>
    <section class="py-9 px-7 sm:px-0 max-w-xl mx-auto">
        <search-component />
        <list-component :pokemons="pokemons" />
    </section>
    <footer-component />
</template>

<script setup>
    import SearchComponent from '../components/SearchComponent.vue';
    import ListComponent from '../components/ListComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    
    const store = useStore();
    const pokemons = computed(() => store.getters.getFavorites);
</script>