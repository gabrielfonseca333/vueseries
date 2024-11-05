import Global from "@/Global";
import axios from "axios";

export default class SeriesService{

    getSeries(){
        return new Promise(function(resolve){
            let series = []
            let request = "api/series"
            let url = Global.urlApiSeries + request
            axios.get(url).then(response=>{
                series=response.data
                resolve(series)
            })
        })
    }

    getPersonajes(){
        return new Promise(function(resolve){
            let personajes = []
            let request = "api/personajes"
            let url = Global.urlApiSeries + request
            axios.get(url).then(response=>{
                personajes=response.data
                resolve(personajes)
            })
        })
    }

    getSerieById(id){
        return new Promise(function(resolve){
            let serie = {}
            let request = "api/series/" + id
            let url = Global.urlApiSeries + request
            axios.get(url).then(response=>{
                serie=response.data
                resolve(serie)
            })
        })
    }

    getPersonajeById(id){
        return new Promise(function(resolve){
            let personaje = {}
            let request = "api/personajes/" + id
            let url = Global.urlApiSeries + request
            axios.get(url).then(response=>{
                personaje=response.data
                resolve(personaje)
            })
        })
    }

    getPersonajesBySerie(id){
        return new Promise(function(resolve){
            let personajes = []
            let request = "api/Series/PersonajesSerie/" + id
            let url = Global.urlApiSeries + request
            axios.get(url).then(response=>{
                personajes=response.data
                resolve(personajes)
            })
        })
    }

    createPersonaje(personaje){
        return new Promise(function(resolve){
            let request = "api/personajes"
            let url = Global.urlApiSeries + request
            axios.post(url, personaje).then(response=>{
                resolve("Personaje Creado! ⭐", response)
            })
        })
    }

    cambiarPersonajeASerie(idPersonaje, idSerie){
        return new Promise(function(resolve){
            let request = "api/Personajes/" + idPersonaje + "/" + idSerie
            let url = Global.urlApiSeries + request
            axios.put(url).then(response=>{
                resolve("Personaje Cambiado de Serie! 🤖", response)
            })
        })
    }

}