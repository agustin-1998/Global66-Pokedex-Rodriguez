<template>
        <div class="w-full flex items-center justify-center flex-col mt-3 space-y-4">
            <h2 class="text-3xl font-semibold" data-aos="fade-up" data-aos-delay="50">Uh-oh!</h2>
            <p class="text-light text-lg" data-aos="fade-up" data-aos-delay="100">You look lost on your journey!</p>
            <button class="block mx-auto px-5 py-3 rounded-full bg-red text-white-f5 hover:bg-red-hover transition-colors 0.1s" @click="cleanQuery" data-aos="fade-up" data-aos-delay="150">
                Go back home
            </button>
        </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

    const inputSearch = document.getElementById('search');

    const cleanQuery = () => {
        if (router.currentRoute.value.name === 'favorites') {
            router.push({ name: 'list' });
        } else {
            inputSearch.value = '';
            store.commit('setQuery', '');
        }
    }
</script>
