import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import Home from '../containers/home';
import Combustivel from '../containers/combustivel';

interface EndPointsProps extends RouteProps {
  name?: string
}

const publicURL = process.env.PUBLIC_URL;


export const endpoints: EndPointsProps[] = [
    { path: `${publicURL}/`, component: Home, exact: true },
    { path: `${publicURL}/home`, name: 'Home', component: Home, exact: true },
    { path: `${publicURL}/combustivel`, name: 'Combustivel', component: Combustivel, exact: true },
    { path: `${publicURL}/sobre`, name: 'Sobre', component: Sobre, exact: true },
  ];
