
//para fazer requisições em API, consumindo outro serviço
import axios from 'axios';

export const getPrice = () => {
  return axios.request({ url: 'https://economia.awesomeapi.com.br/json/all' });
}