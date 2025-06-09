import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { TodoContext } from '../contexts/TodoContext';

export default function DeleteButton({ id }) {
    const { todos, setTodos } = useContext(TodoContext);

    const handleDelete = () => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos); // updates both context and localStorage
    };

    return (
        <Button className=" d-flex justify-content-end" variant="danger" type="button" onClick={handleDelete}>
            <i className="bi bi-trash3"></i>
        </Button>
    );
}