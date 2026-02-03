import { render, screen, fireEvent } from "@testing-library/react"
import Login from "../Login"

it("shows success message on login", () => {
  render(<Login />)

  fireEvent.click(screen.getByText("Login"))

  expect(screen.getByText("Login successful")).toBeInTheDocument()
})
