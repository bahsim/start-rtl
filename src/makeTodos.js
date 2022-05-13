const makeTodos = (n) => {
    const todos = [];

    for (let i = 0; i < n; i++) {
        todos.push({
            id: i,
            userId: i,
            title: `Todo item ${i}`,
            completed: Boolean(Math.round(Math.random())),
        });
    }

    return todos;
};

export const todos = makeTodos(200);
