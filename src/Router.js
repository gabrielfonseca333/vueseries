import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue"
import SerieComponent from "./components/SerieComponent.vue"
import PersonajesSeriesComponent from "./components/PersonajesSeriesComponent.vue"
import CrearPersonaje from "./components/CrearPersonaje.vue"
import ModificarPersonaje from "./components/ModificarPersonaje.vue"

const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/serie/:idSerie?", component: SerieComponent},
    {path:"/personajesserie/:idSerie?", component: PersonajesSeriesComponent},
    {path:"/crear", component: CrearPersonaje},
    {path:"/modificar", component: ModificarPersonaje},
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;