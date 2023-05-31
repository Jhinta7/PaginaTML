<template>
        <pv-menubar :model="items" class="header">
            <template #start>
                <router-link to="/Home">
                    <img alt="logo" src="https://cdn.discordapp.com/attachments/1074693883641987212/1077658400143450142/TML_COR.png" height="80" class="imagen-header" />
                </router-link>
            </template>
        </pv-menubar>
</template>



<script>
export default {
    name: "Header"

};
</script>

<script setup>
import { ref } from "vue";



const items = ref([
    {
        label: 'Torneos',

        items: [
            {
                label: 'LATAM Grand Prix',
                to: '/latamgrandprix'
            },
            {
                label: 'Torneos Velocidad',
                to: '/torneovelocidad'
            },

        ]
    },
    {
        label: 'Salon de la fama',
        items: [
            {
                label: 'Salon de Latam',
                to: '/salonlatam'
            },
            {
                separator: true
            },
            {
                label: 'Salon de Argentina',
                to: '/salonargentina'
            },
            {
                label: 'Salon de Chile',
                to: '/salonchile'
            },
            {
                label: 'Salon de Perú',
                to: '/salonperu'
            }
        ]
    },
    {
        label: 'Guias',
        items: [
            {
                label: 'Openers',
                to: '/openers'
            },
            {
                label: 'Coachs',
                to: '/coachs'
            },
            ]
    },
    {
        label: 'Comunidad',
        to: '/comunidad'
    }
]);
</script>


<style scoped>

.header{
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: #18122B;
    height: 80px;
    color:ghostwhite;
    font-size: 22px;
    font-weight: normal;
    text-align: center;
    align-items: center;
    display: flex;
}


a:visited {
    text-decoration: none;
    color:ghostwhite;
}
a:link {
    text-decoration: none;
    color:ghostwhite;
    text-align: center;
}

</style>