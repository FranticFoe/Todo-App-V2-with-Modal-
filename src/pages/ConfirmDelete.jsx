import { Button, Modal } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import { TodoContext } from '../contexts/TodoContext';

export default function DeleteButton({ id }) {
    const { todos, setTodos } = useContext(TodoContext);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        setShowModal(false)
    };

    return (
        <>
            <Button className=" d-flex justify-content-end" variant="danger" type="button" onClick={() => setShowModal(true)}>
                <i className="bi bi-trash3"></i>
            </Button >

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header className="flex-column text-center border-0" >
                    <i className="bi bi-exclamation-triangle text-warning display-1 mb-4"></i>
                    <Modal.Title>
                        Confirm Deletion
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center border-0">
                    Are you sure you want to delete this task?
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between w-100 border-0 mt-3 ">
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}