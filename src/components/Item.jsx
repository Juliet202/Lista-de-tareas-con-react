import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const Item = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button variant="secondary" onClick={()=> {borrarTarea(nombreTarea)}}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default Item;
