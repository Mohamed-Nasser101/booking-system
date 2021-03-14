<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light ">
            <router-link  class="navbar-brand mr-auto" :to="{name:'home'}">Booking</router-link>
        </nav>

        <div class="container my-4 px-4">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
.container{
    max-width: 1000px;
}
</style>
