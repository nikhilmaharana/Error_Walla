import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar text", () => {
  render(<Navbar />);
  expect(screen.getByText(/navbar/i)).toBeInTheDocument();
});
