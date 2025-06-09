import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from './contexts/TodoContext';


export default function EditButton({ id }) {
    const { idKey, setIdKey } = useContext(TodoContext);
    console.log(`This is id:${id}`);
    const navigate = useNavigate();
    const handleEdit = () => {
        setIdKey(id);
        console.log(`This is setIdKey ${idKey}`);
        navigate('/edit');

    };
    return (
        <Button className="ml-2 text-light" variant="warning" type="submit" onClick={handleEdit}>
            <i className="bi bi-pencil"></i>
        </Button>
    )

}
