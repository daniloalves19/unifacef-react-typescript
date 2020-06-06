import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import Home from '../containers/home';

interface EndPointsProps extends RouteProps {
  name?: string
}

const publicURL = process.env.PUBLIC_URL;


export const endpoints: EndPointsProps[] = [
    { path: `${publicURL}/`, component: Home, exact: true },
    { path: `${publicURL}/home`, name: 'Home', component: Home, exact: true },
    { path: `${publicURL}/sobre`, name: 'Sobre', component: Sobre, exact: true },
  ];
