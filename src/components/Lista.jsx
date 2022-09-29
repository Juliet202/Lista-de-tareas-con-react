import React from "react";
import { ListGroup } from "react-bootstrap";
import Item from "./Item";


const Lista = ({arregloTareas, borrarTarea}) => {
  return (
    
      <ListGroup>
        {
           arregloTareas.map((tarea,posicion)=> <Item key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></Item>)
        }
       
      </ListGroup>
    
  );
};

export default Lista;
