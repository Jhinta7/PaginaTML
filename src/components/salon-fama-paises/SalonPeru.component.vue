<template>
<div class="pagina-peru">
    <div class="card flex  justify-content-center">
        <pv-card style="width: auto">
            <template #header>
                <img alt="user header" class="imagen-baner" src="https://cdn.discordapp.com/attachments/1055308105090617394/1112842642322104470/banner-2.jpg" />
            </template>
            <template #title> Salon de la fama Perú</template>
        </pv-card>
    </div>

    <div>
        <pv-datatable :value="products" tableStyle="min-width: 50rem" ref="dt" dataKey="id">
            <pv-column field="puesto" header="Puesto"></pv-column>
            <pv-column field="jugador.name" header="Jugador" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.data.jugador.name" :src="`${slotProps.data.jugador.image}`" width="50" style="vertical-align: middle" />
                        <span>{{ slotProps.data.jugador.name }}</span>
                    </div>
                </template>
            </pv-column>
            <pv-column field="sprint" header="Sprint"></pv-column>
            <pv-column field="cambios.posiciones" header="Cambios de Posicion" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <span>{{ slotProps.data.cambios.posiciones }}</span>
                        <img :alt="slotProps.data.cambios.posiciones" :src="`${slotProps.data.cambios.imagen}`" width="35" style="vertical-align: middle" />
                    </div>
                </template>
            </pv-column>
        </pv-datatable>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "SalonPeru",
    data() {
        return {
            products: [],
        };
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            axios.get("http://localhost:3000/api/v1/ListaPeru").then((response) => {
                this.products = response.data;
            });
        },
    },
};
</script>
<style>
.imagen-baner{
    height:230px;
    align-content: center;
}
.pagina-peru{
}

</style>