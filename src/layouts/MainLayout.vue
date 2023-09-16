<template>
    <main class="bg-white-f9 min-h-screen main-layout">
        <slot></slot>
    </main>
</template>

<style>
    .main-layout::-webkit-scrollbar  {
        width: 0;
    }

    .main-layout {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
</style>

