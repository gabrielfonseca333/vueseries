<template>
  <div>
    <h1>Personajes</h1>
    <div class="col-6 mx-auto">
        <button class="btn btn-danger" @click="volver()">Volver</button>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imange</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="per in personajes" :key="per">
                    <td>{{per.nombre}}</td>
                    <td><img :src="per.imagen" style="width: 300px; heigth: 485px"/></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService"
const service = new SeriesService();
export default {
    name:"PersonajesSeriesComponent",
    data(){
        return{
            idSerie:0,
            personajes:[]
        }
    },
    mounted(){
        this.idSerie=this.$route.params.idSerie
        service.getPersonajesBySerie(this.idSerie).then(result=>{
            this.personajes=result
        })
    },
    methods:{
        volver(){
            window.history.back(); 
        }
    }
}
</script>

<style>

</style>