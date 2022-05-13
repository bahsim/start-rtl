import { createContext, useReducer } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "LOAD_TODO_LIST":
                return { ...state, todoList: action.todoList };
            case "LOAD_TODO_ITEM":
                return { ...state, activeTodoItem: action.todo };
            default:
                return state;
        }
    }

    const [appData, appDispatch] = useReducer(reducer, {
        todoList: [],
        activeTodoItem: { id: 0 }
    })

    return (
        <AppContext.Provider value={{ appData, appDispatch }}>
            {children}
        </AppContext.Provider>
    )
}
