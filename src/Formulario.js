import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";

const Formulario = () => {

    const [nombre, setNombre] = useState({
        firstName: '',
        lastName: ''
    });

    const [respuesta, setRespuesta] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://j95sdr1uch.execute-api.us-east-1.amazonaws.com/dev/', nombre).then((res) => {
            setRespuesta(res.data.body)
        })
    }


    return (
        <>
            <Form className="container container-fluid mt-5" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name Prueba" value={nombre.firstName}
                                  onChange={e => setNombre({...nombre, firstName: e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" value={nombre.lastName}
                                  onChange={e => setNombre({...nombre, lastName: e.target.value})}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {respuesta !== null ? <p>{respuesta}</p> : null}
        </>
    );
};

export default Formulario;
