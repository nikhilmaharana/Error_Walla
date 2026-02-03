import { render } from "@testing-library/react"
import Login from "../Login"

it("matches snapshot", () => {
  const { asFragment } = render(<Login />)
  expect(asFragment()).toMatchSnapshot()
})
