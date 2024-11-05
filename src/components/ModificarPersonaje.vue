<template>
  <div>
    <h1>Cambiar Personaje de Serie</h1>
    <div class="card col-6 mx-auto">
        <label>Selecciona un Personaje</label>
        <select @change="mostrarImagenPersonaje()" v-model="idPersonaje" class="form-control">
            <option v-for="per in personajes" :key="per" :value="per.idSerie">{{per.nombre}}</option>
        </select>
        <label>Selecciona una serie</label>
        <select @change="mostrarImagenSerie()" v-model="idSerie" class="form-control">
            <option v-for="ser in series" :key="ser" :value="ser.idSerie">{{ser.nombre}}</option>
        </select>
        <button @click="()=>{cambiarPersonajeASerie(personaje.idPersonaje, serie.idSerie)}" class="btn btn-primary">Guardar cambios</button>
    </div>

    <div class="col-6 mx-auto">
        <hr>
        <div class="card">
            <!-- personaje -->
            <img :src="personaje.imagen" style="width: 300px; height: 300px"/>
        </div>
        <div class="card">
            <!-- serie -->
            <img :src="serie.imagen" style="width: 300px; height: 300px"/>
        </div>
    </div>

  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService"
const service = new SeriesService();

export default {
    name: "ModificarPersonaje",
    data(){
        return{
            personajes:[],
            series:[],
            idPersonaje:0,
            idSerie:0,
            serie:{},
            personaje:{}
        }
    },

    mounted(){
        service.getSeries().then(result=>{
            this.series=result
            
        })

        service.getPersonajes().then(result=>{
            this.personajes=result
            
        })

        
    },

    methods:{
        mostrarImagenSerie(){
            service.getSerieById(this.idSerie).then(result=>{
            this.serie = result
        })
        },

        mostrarImagenPersonaje(){
            service.getPersonajeById(this.idPersonaje).then(result=>{
                this.personaje=result
            })
        },

        cambiarPersonajeASerie(idPersonaje, idSerie){
            service.cambiarPersonajeASerie(idPersonaje, idSerie).then(result=>{
                console.log(result)
                this.$router.push("/personajesserie/" + this.idSerie)
            })
        }
    },


}
</script>

<style>

</style>