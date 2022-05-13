import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

export const TodoList = () => {
    const [loading, setLoading] = useState(true);
    const { appData, appDispatch } = useContext(AppContext);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(({ data }) => {
                appDispatch({ type: "LOAD_TODO_LIST", todoList: data });
                setLoading(false);
            });
    }, [appDispatch]);
    return (
        <div>
            {loading ? (
                <p>Fetching todos</p>
            ) : (
                <ul>
                    {appData.todoList.slice(0, 15).map(({ id, title }) => (
                        <Link key={id} to={`item/${id}`}>
                            {title}
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};
