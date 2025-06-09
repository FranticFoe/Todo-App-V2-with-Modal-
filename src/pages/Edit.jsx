import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function EditToDo() {

    const { idKey, setIdKey } = useContext(TodoContext);
    const { todos, setTodos } = useContext(TodoContext);
    console.log(idKey, todos)

    const object = todos.find(object => object.id === idKey)
    const [title, setTitle] = useState(object.title);
    const [description, setDescription] = useState(object.description);
    const [completed, setCompleted] = useState(false);

    const navigate = useNavigate();

    console.log(`The setIdkey is still here ${idKey}`)

    console.log(object)

    return (
        <Container>
            <h1 className="my-3">Edit Todo</h1>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    const updatedTodos = todos.filter(todo => todo.id !== idKey);
                    setTodos(updatedTodos); // updates both context and localStorage
                    setIdKey(null);
                    setTodos([...updatedTodos, { id: Date.now(), title, description, completed }]);
                    console.log(updatedTodos)
                    navigate("/");
                }}
            >

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label> Title </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={object.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label> Description </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder={object.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    label="Mark as completed"
                    id="completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="mb-3"
                />
                <Button variant="primary" type="submit">Confirm</Button>
            </Form>
        </Container >
    );


}