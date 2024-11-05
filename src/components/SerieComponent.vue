<template>
  <div>
    <h1>{{serie.nombre}}</h1>
    <div class="col-6 mx-auto">
      <img :src="serie.imagen" style="width: 485; height: 300px"/>
      <hr>
      <p><b>Puntuación: </b>{{serie.puntuacion}}</p>
      <p><b>Año: </b>{{serie.anyo}}</p>
      <router-link :to="'/personajesserie/' + serie.idSerie" class="btn btn-primary">Personajes</router-link>
    </div>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService"
const service = new SeriesService();

export default {
  name: "SerieComponent",
  data() {
    return { 
        idSerie: 0, 
        serie: {} };
  },

  mounted(){
    this.idSerie = this.$route.params.idSerie
    console.log("idserie: ", this.idSerie)
    service.getSerieById(this.idSerie).then(result=>{
      this.serie = result
    })
    
  },

  watch: {
      "$route.params.idSerie"(nextVal, oldVal){
        if (nextVal != oldVal){
            let id = this.$route.params.idSerie
            service.getSerieById(id).then(response => {
            console.log(response);
            this.serie = response
            })
        }
      }
    }
 
};
</script>

<style>
</style>