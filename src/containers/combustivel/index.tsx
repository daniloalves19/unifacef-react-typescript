import * as React from 'react';

import {Container, Grid, Header, Form, Button } from 'semantic-ui-react';

import {inject, observer} from 'mobx-react';

import CombustivelStore from './store';

interface Props {
    combustivel: CombustivelStore;
}


@inject ('combustivel')
@observer
export default class Combustivel extends React.Component<Props>{

    render(){

        const {etanol, gasolina, submit, handleForm} = this.props.combustivel;

        const submitForm = (e) =>{
            e.preventDefault();
            submit();
        }

        return(
            <Container>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header color='blue' as='h2'>
                                <Header.Content>
                                    Combustivel
                                    <Header.Subheader>
                                        Etanol ou Gasolina?
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Form onSubmit={submitForm}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Preço da Gasolina</label>
                            <input step='any' 
                            max='99' 
                            value={gasolina} 
                            onChange={handleForm} 
                            type='number'
                            name='gasolina'
                            placeholder='ex R$ 4.05' />
                        </Form.Field>
                        <Form.Field>
                            <label>Preço do Etanol</label>
                            <input step='any' 
                            max='99' 
                            value={etanol} 
                            onChange={handleForm} 
                            type='number'
                            name='etanol'
                            placeholder='ex R$ 2.00' />
                        </Form.Field> 
                        <Button type='submit'>Consultar</Button>                     
                    </Form.Group>                    
                </Form>
            </Container>
        );
    }

}
