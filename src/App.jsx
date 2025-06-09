import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { TodoContext } from "./contexts/TodoContext";
import AddTodo from "./pages/AddTodo";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import RequireId from './RequireId';
import EditTodo from './pages/Edit';

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Todo App V2</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [todos, setTodos] = useLocalStorage("todosv2", []);
  const [idKey, setIdKey] = useLocalStorage("idkey", []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, idKey, setIdKey }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="edit" element={
              <RequireId>
                <EditTodo />
              </RequireId>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ TodoContext.Provider >
  )
}
