<template>
  <div>
    <h1>CrearPersonaje</h1>
    <div class="card col-6 mx-auto">
        <input type="text" placeholder="nombre" v-model="nombre" class="form-control"/>
        <input type="text" placeholder="imagen" v-model="imagen" class="form-control"/>
        <select v-model="idSerie" class="form-control"> 
            <option v-for="serie in series" :key="serie" :value="serie.idSerie" >
                {{serie.nombre}}
            </option>
        </select>
        <button @click="crearPersonaje()" class="btn btn-outline-success">Crear</button>
    </div>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService"
const service = new SeriesService();

export default {
    name:"CrearPersonaje",
    data(){
        return{
            idPersonaje:0,
            nombre: "",
            imagen:"",
            idSerie:0,
            series:[]
        }
    },

    mounted(){
        service.getSeries().then(result=>{
            this.series=result
        })
    },

    methods:{

        crearPersonaje(){
            let personaje = {
                idPersonaje: this.idPersonaje,
                nombre: this.nombre,
                imagen: this.imagen,
                idSerie: this.idSerie
            }

            service.createPersonaje(personaje).then(result=>{
                console.log(result)
                this.$router.push("/personajesserie/" + this.idSerie)
            })
        }

    }
}
</script>

<style>

</style>