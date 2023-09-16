<template>
    <section class="max-w-xl grid place-items-center mx-auto h-screen">
        <img src="../assets/img/Loader.png" alt="loading-icon" class="animate-spin" width="106" loading="lazy">
    </section>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();
    
    onMounted( async () => {
        await store.dispatch('fetchPokemons');
        setTimeout(() => {
            router.push({ name: 'list' });
        }, 2000);
    });

</script>