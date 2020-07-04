import { assign } from '../../utils/object.util';
import { action, observable } from 'mobx';

export default class RegisterStore{
    @observable zipcode?: number;
    @observable github?: string;

    @action handleForm = (event: any, select?:any) =>{
        const {name, value} = select || event.target;
        assign(this, name, value);
    }
}

const register = new RegisterStore();
export { register };