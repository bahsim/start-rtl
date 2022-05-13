import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./AppContext";

export const TodoItem = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const {
        appData: { activeTodoItem },
        appDispatch,
    } = useContext(AppContext);

    const { title, userId, completed } = activeTodoItem;

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(({ data }) => {
                appDispatch({ type: "LOAD_TODO_ITEM", todo: data });
                setLoading(false);
            });
    }, [id, appDispatch, setLoading]);

    return <div className="single-todo-item">{loading ? (
        <p>Fetching todo item {id}</p>
    ) : (<div>
        <h2 className="todo-title">{title}</h2>
        <h4>Added by: {userId}</h4>
        {completed ? (
            <p className="completed">This item has been completed</p>
        ) : (
            <p className="not-completed">This item is yet to be completed</p>
        )}
    </div>)}</div>;
};
