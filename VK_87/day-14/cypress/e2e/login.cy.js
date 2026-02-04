describe("Login Flow", () => {
  it("logs in with valid credentials", () => {
    cy.visit("http://localhost:5173")

    cy.get('input[placeholder="Email"]').type("test@example.com")
    cy.get('input[placeholder="Password"]').type("123456")
    cy.get('[data-testid="login-btn"]').click()

    cy.get("body").should("contain.text", "Login successful")
  })

  it("shows error for invalid credentials", () => {
    cy.visit("http://localhost:5173")

    cy.get('input[placeholder="Email"]').type("wrong@example.com")
    cy.get('input[placeholder="Password"]').type("wrong")
    cy.get('[data-testid="login-btn"]').click()

    cy.get("body").should("contain.text", "Invalid credentials")
  })
})
