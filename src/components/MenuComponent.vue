<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">You Are The GOAT, S.L.</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/crear">Nuevo Personaje</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/modificar">Modificar Personaje</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </a>
              <ul class="dropdown-menu">

                <!-- aqui van los li  -->
                <li v-for="serie in series" :key="serie">
                  <router-link :to="'/serie/' + serie.idSerie">{{serie.nombre}}</router-link>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService"
const service = new SeriesService();

export default {
  name: "MenuComponent",
  data(){
    return{
        series:[]
    }
  },

  mounted(){
      service.getSeries().then(result=>{
        this.series=result
      })
  }
};
</script>

<style>
</style>