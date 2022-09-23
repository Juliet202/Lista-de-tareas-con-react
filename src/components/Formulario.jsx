
import { useState } from "react";
import {Form,Button} from "react-bootstrap"
import Lista from './Lista';

const Formulario = () => {
     const [tarea , setTarea ] = useState ('');
     const [arregloTareas , setArregloTareas ] = useState ([]);

     const handleSubmit = (e)=>{
        e.preventDefault();
        setArregloTareas ([...arregloTareas,tarea]);
        setTarea('')

     }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex">
        <Form.Control value={tarea} type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)}/>
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