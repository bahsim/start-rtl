import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Getting started with React Testing Library</h2>
            </header>
            <div className="App-body">
                <BrowserRouter>
                    <Routes>
                        <Route path="/item/:id" element={<TodoItem />} />
                        <Route exact path="/" element={<TodoList />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
