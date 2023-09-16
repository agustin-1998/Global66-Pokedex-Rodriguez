<template>
    <footer class="fixed bottom-0 bg-white w-full z-20">
        <div class="max-w-xl flex justify-between items-center gap-x-5 py-4 px-7 sm:px-0 mx-auto">
            <router-link class="mx-auto px-5 py-3 rounded-full bg-gray-bf transition-colors 0.1s w-full text-center text-white flex justify-center items-center gap-x-3 hover:bg-gray-5e" :to="{ name: 'list' }" @click="resetQuery">
                <figure>
                    <img src="../assets/img/allIcon.svg" alt="all-icon">
                </figure>
                All
            </router-link>
            <router-link class="mx-auto px-5 py-3 rounded-full bg-gray-bf transition-colors 0.1s w-full text-center text-white flex justify-center items-center gap-x-3 hover:bg-gray-5e" :to="{ name: 'favorites' }">
                <figure>
                    <img src="../assets/img/starIcon.svg" alt="star-icon">
                </figure>
                Favorites
            </router-link>
        </div>
    </footer>
</template>

<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();
    const inputSearch = document.getElementById('search');

    // if current route is list, setQuery to empty string
    const resetQuery = () => {
        if (router.currentRoute.value.name === 'list') {
            inputSearch.value = '';
            store.commit('setQuery', '');
        } else {
            router.push({ name: 'list' });
        }
    }
</script>

<!-- Darle estilo a los links cuando esten en la ruta -->

<style scoped>
    .router-link-active {
        background-color: #F22539;
    }

    .router-link-exact-active {
        background-color: #F22539;
    }

    .router-link-exact-active:hover {
        background-color: #C00E20;
    }

    .router-link-active:hover {
        background-color: #C00E20;
    }
</style>