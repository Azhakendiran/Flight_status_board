import { render, screen } from "@testing-library/react";
import FlightList from "./FlightList";
import { BrowserRouter } from "react-router-dom";

test("renders flight list title", () => {
  render(
    <BrowserRouter>
      <FlightList />
    </BrowserRouter>
  );
  expect(screen.getByText(/Real-Time Flight Status Board/i)).toBeInTheDocument();
});
