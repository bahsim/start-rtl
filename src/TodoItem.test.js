import { screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { render } from "./custom-render";
import { TodoItem } from "./TodoItem";

describe("<TodoItem />", () => {
    it("should render correctly for a completed item", async () => {
        jest.mock("react-router-dom", () => ({
            useParams: jest.fn().mockReturnValue({ id: "1" }),
        }));

        const mAxiosRespnse = {
            data: { id: 1, title: "Todo item 1", userId: 1, completed: true },
        };

        jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosRespnse);

        render(<TodoItem />);

        expect(axios.get).toBeCalledTimes(1);

        const titleElement = await waitFor(() =>
            screen.findByText(/todo item 1/i)
        );

        expect(titleElement).toBeInTheDocument();

        expect(screen.getByText(/Added by: 1/)).toBeInTheDocument();

        expect(
            screen.getByText(/This item has been completed/)
        ).toBeInTheDocument();
    });
    it("should render correctly for an uncompleted item", async () => {
        jest.mock("react-router-dom", () => ({
            useParams: jest.fn().mockReturnValue({ id: "2" }),
        }));

        const mAxiosRespnse = {
            data: { id: 2, title: "Todo item 2", userId: 2, completed: false },
        };

        jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosRespnse);

        render(<TodoItem />);

        expect(axios.get).toBeCalledTimes(1);

        const titleElement = await waitFor(() =>
            screen.findByText(/todo item 2/i)
        );

        expect(titleElement).toBeInTheDocument();

        expect(screen.getByText(/Added by: 2/)).toBeInTheDocument();

        expect(
            screen.getByText(/This item is yet to be completed/)
        ).toBeInTheDocument();
    });
});
