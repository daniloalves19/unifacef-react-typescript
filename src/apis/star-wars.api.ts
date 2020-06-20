import axios from 'axios';


const baseURL = process.env.REACT_APP_STAR_WARS_BASE_URL;

export const getFilms =() =>{
    //return axios.request({method:'GET', baseURL, url:'films'})
    //Para metodo GET não precisa colocar method
    //Se quiser dar um timeout maximo para a requisição
    //return axios.request({baseURL, url:'films', timeout:2000})
    return axios.request({baseURL, url:'films'})
}

export const getFilmById =(id: number) =>{
    //return axios.request({method:'GET', baseURL, url:'films'})
    //Para metodo GET não precisa colocar method
    return axios.request({baseURL, url:`films/${id}`})
}