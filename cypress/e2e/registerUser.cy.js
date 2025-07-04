it('Powinien wypełnić formularz tworzenia nowego konta', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
  
    // Podaj losowy e-mail
    const randomEmail = `testuser_${Date.now()}@example.com`
    cy.get('#email_create').type(randomEmail)
    cy.get('#SubmitCreate').click()
  
    // Poczekaj na formularz rejestracji
    cy.get('#account-creation_form', { timeout: 10000 }).should('be.visible')
  
    // Wypełnij dane
    cy.get('#id_gender1').check()
    cy.get('#customer_firstname').type('Jan')
    cy.get('#customer_lastname').type('Kowalski')
    cy.get('#passwd').type('SuperHaslo123')
  
    cy.get('#days').select('10')
    cy.get('#months').select('May')
    cy.get('#years').select('1990')

  
    cy.get('#submitAccount > span').click()
    cy.wait(20000) // 10 000 ms = 10 sekund
  
    // Sprawdź, czy użytkownik trafił na stronę konta
    cy.url().should('include', 'controller=my-account')
    cy.get('h1').should('contain.text', 'My account')
      
        // Sprawdzenie czy wiadomość została wysłana
        cy.get('.alert').should('contain.text', 'Your account has been created.')
  })
  