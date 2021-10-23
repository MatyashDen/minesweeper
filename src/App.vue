<template>
    <div id="app" class="position-absolute w-100 h-100">
        <span id="background" class="position-fixed w-100 h-100"></span>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    #background {
        background: #d8d8d8;
        z-index: -10;
    }
</style>