import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import Home from '../containers/home';
import Combustivel from '../containers/combustivel';
import StarWars from '../containers/star-wars';
import StarWarsDetails from '../containers/star-wars-details';
import Cache from '../containers/cache';
import Tags from '../containers/tags';
import Register from '../containers/register';
import Corona from '../containers/corona';

interface EndPointsProps extends RouteProps {
  name?: string
}

const publicURL = process.env.PUBLIC_URL;


export const endpoints: EndPointsProps[] = [
    { path: `${publicURL}/`, component: Home, exact: true },
    { path: `${publicURL}/home`, name: 'Home', component: Home, exact: true },
    { path: `${publicURL}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },
    { path: `${publicURL}/star-wars`, name: 'StarWars', component: StarWars, exact: true },
    { path: `${publicURL}/star-wars/:id`, component: StarWarsDetails, exact: true },
    { path: `${publicURL}/cache`, name: 'Cache', component: Cache, exact: true },    
    { path: `${publicURL}/tags`, name: 'Tags', component: Tags, exact: true },  
    { path: `${publicURL}/register`, name: 'Register', component: Register, exact: true }, 
    { path: `${publicURL}/corona`, name: 'Corona', component: Corona, exact: true },
    { path: `${publicURL}/sobre`, name: 'Sobre', component: Sobre, exact: true },
  ];
