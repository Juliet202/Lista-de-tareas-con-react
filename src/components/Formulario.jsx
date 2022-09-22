import React from 'react';
import {Form,Button} from "react-bootstrap"
import Lista from './Lista';

const Formulario = () => {
    return (
        <div>
            <Form>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="success" type="submit">
        Enviar
      </Button>
      </Form.Group>

    </Form>

    <Lista></Lista>
        </div>
    );
};

export default Formulario;