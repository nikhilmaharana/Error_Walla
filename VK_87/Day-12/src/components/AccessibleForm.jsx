function AccessibleForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        required
        aria-required="true"
      />
    </form>
  )
}

export default AccessibleForm
