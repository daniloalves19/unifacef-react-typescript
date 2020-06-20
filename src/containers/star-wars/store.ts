import { action, observable } from 'mobx';
// ./ mesma raiz  ../ volta uma pasta
import { getFilms } from '../../apis/star-wars.api';

export default class StarWarsStore{
    @observable films: any[] = [];

    @action buildFilms = async() => {
        const { data  } = await getFilms();
        this.films = data;
    }
}

const starWars = new StarWarsStore();

export { starWars };

