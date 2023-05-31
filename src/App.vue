<script setup>
import Header from "@/components/Header.component.vue";
import Prueba from "@/components/prueba.component.vue";
import Footer from "@/components/Footer.component.vue";
</script>

<template>

    <div class="card ">
        <div class="card-container ">
            <div class="block top-0 text-center p-4 border-round mb-3">
                <Header/>
            </div>
            <div class="block text-center p-4 border-round mb-3">
                <router-view></router-view>
            </div>
            <div class="block text-center p-4 border-round mb-3">
                <Footer/>
            </div>
        </div>
    </div>


</template>

<style scoped>

.p-mh-100vh {
    min-height: 100vh;
}

</style>