import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import axios from "axios";
import { render } from "./custom-render";
import { todos } from "./makeTodos";
import { TodoList } from "./TodoList";

describe("<TodoList />", () => {
    it("should render correctly", async () => {
        const mAxiosRespnse = {
            data: todos,
        };

        jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosRespnse);

        render(<TodoList />);

        expect(axios.get).toBeCalledTimes(1);

        await waitForElementToBeRemoved(() =>
            screen.queryByText(/Fetching todos/i)
        );

        todos.slice(0, 15).forEach((td) => {
            expect(screen.getByText(td.title)).toBeInTheDocument();
        });
    });
});
