import AccessibleButton from "./components/AccessibleButton"
import AccessibleForm from "./components/AccessibleForm"
import AccessibleImage from "./components/AccessibleImage"

function App() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Hello There</h1>

      <p aria-live="polite">
        Click the button to see interaction feedback
      </p>

      <AccessibleButton
        label="Click Me"
        onClick={() => alert("Button clicked")}
      />

      <br /><br />

      <AccessibleForm />

      <br /><br />

      <AccessibleImage />
    </main>
  )
}

export default App
