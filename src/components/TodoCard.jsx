import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import DeleteButton from "../pages/ConfirmDelete"
import EditButton from "../EditToDo"

export default function TodoCard({ todo }) {
    const completed = todo.completed;
    const bg = completed ? "success" : "danger";
    const [timer, setTimer] = useState(0);
    const [timerInterval, SetTimerInterval] = useState(null);


    function startTimer() {
        if (timerInterval === null) {
            const intervalID = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
            SetTimerInterval(intervalID);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        SetTimerInterval(null);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        SetTimerInterval(null);
        setTimer(0)
    }

    useEffect(() => {
        return () => {
            clearInterval(timerInterval);
        }
    }, [timerInterval])

    return (
        <>
            <Card className="my-3">
                <Card.Header className={`h3 bg-${bg} text-light p-3`} >{!completed && "Not"}Completed</Card.Header>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center  mb-3">
                        <EditButton id={todo.id}>
                        </EditButton>
                        <DeleteButton id={todo.id}>
                        </DeleteButton>
                    </div>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <p className="h5 mt-5 "><b>Timer:</b> {timer} seconds</p>
                    <div className="mt-4">
                        <Button onClick={startTimer}>
                            <i className="bi bi-play"></i>
                        </Button>
                        <Button onClick={pauseTimer} className="mx-2">
                            <i className="bi bi-pause-fill"></i>
                        </Button>
                        <Button onClick={resetTimer} className="">
                            <i className="bi bi-arrow-clockwise"></i>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}