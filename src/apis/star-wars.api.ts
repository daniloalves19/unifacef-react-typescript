import axios from 'axios';
import { configs } from '../configs';


const baseURL = configs.apis.starWars;

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