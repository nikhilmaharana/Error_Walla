import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "../Counter"

test("renders initial count", () => {
  render(<Counter />)
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
})

test("increments count on button click", () => {
  render(<Counter />)
  const button = screen.getByText(/Increment/i)

  fireEvent.click(button)

  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()
})
