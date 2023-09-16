<template>
      <section class="max-w-xl mx-auto flex flex-col items-center min-h-screen pt-[70px] px-5 lg:px-0">
          <!-- Welcome img -->
          <div class="relative w-80 h-80 grid place-items-center" data-aos="fade-down" data-aos-delay="100">
            <img src="../assets/img/Ellipse10.png" alt="elipse-img" loading="lazy">
            <img src="../assets/img/welcomePikachu.png" alt="pikachu-img" class="absolute -right-[10px] -top-[8px]" loading="lazy">
          </div>
  
          <!-- Welcome title -->
          <h1 class="text-black-35 text-2xl text-center font-semibold" data-aos="fade-down" data-aos-delay="150">Welcome to Pokédex</h1>
          <p class="text-center font-light my-8" data-aos="fade-down" data-aos-delay="200">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
          <router-link class="block mx-auto px-5 py-3 rounded-full bg-red text-white-f5 hover:bg-red-hover transition-colors 0.1s" :to="{ name: 'loading' }" data-aos="fade-down" data-aos-delay="250">
            Get Started
          </router-link>
      </section>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

</script>