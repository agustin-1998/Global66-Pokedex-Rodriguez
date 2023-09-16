<template>
    <div class="w-full flex items-center justify-start relative">
        <figure class="absolute left-3">
            <img src="../assets/img/searchIcon.svg" alt="search-img">
        </figure>
        <input type="search" placeholder="Search" id="search" class="w-full border-none rounded-md shadow-md h-12 py-3 pl-10 ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-gray-100 focus:outline focus:outline-offset-0 placeholder:text-gray-300 bg-white pr-3" v-model="search">
    </div>
</template>

<script setup>
    import { ref, watch, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const search = ref('');

    onMounted(() => {
        store.commit('setQuery', '');
    });

    watch(search, (value) => {
        store.commit('setQuery', value.toLowerCase());
    });

</script>