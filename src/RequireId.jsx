import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TodoContext } from './contexts/TodoContext';

//find a way to store the new id 

export default function RequireAuth({ children }) {
    const { idKey } = useContext(TodoContext);
    if (!idKey || idKey.length === 0) {
        return <Navigate to="/" replace />;
    }
    return children
}