import {createRouter ,createWebHashHistory} from 'vue-router';
import LatamGrandPrix from "@/components/LatamGrandPrix.component.vue";
import Home from "@/components/Home.component.vue";
import Openers from "@/components/Openers.component.vue"
import SalonDeLaFama from "@/components/SalonDeLaFama.component.vue";
import SalonArgentina from "@/components/salon-fama-paises/SalonArgentina.component.vue";
import SalonChile from "@/components/salon-fama-paises/SalonChile.component.vue";
import SalonPeru from "@/components/salon-fama-paises/SalonPeru.component.vue";
import Torneos from "@/components/Torneos.component.vue";
import TorneoVelocidad from "@/components/Torneos.component.vue";

const routes =[
    { path: '/latamgrandprix', component: LatamGrandPrix},
    { path: '/home', component: Home},
    { path: '/openers', component: Openers},
    { path: '/salonlatam', component: SalonDeLaFama},
    { path: '/salonargentina', component: SalonArgentina},
    { path: '/salonchile', component: SalonChile},
    { path: '/salonperu', component: SalonPeru},
    { path: '/Torneos', component: Torneos},
    { path: '/torneovelocidad', component: TorneoVelocidad}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;