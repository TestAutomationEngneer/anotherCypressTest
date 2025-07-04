describe('Przejście do strony kontaktowej', () => {
    it('Powinien kliknąć Contact Us i przejść do formularza kontaktowego', () => {
      cy.visit('http://www.automationpractice.pl/index.php')
  
      // Kliknij link "Contact us" w prawym górnym rogu
      cy.get('#contact-link > a').click()
  
      // Sprawdzenie, czy jesteśmy na stronie kontaktowej
      cy.url().should('include', 'controller=contact')
      cy.get('h1.page-heading').should('contain.text', 'Customer service - Contact us')
    })

    it('Powinien wypełnić i wysłać formularz kontaktowy', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=contact')
      
        // Wybierz temat z dropdown
        cy.get('#id_contact').select('Customer service')
      
        // Wpisz adres e-mail
        cy.get('#email').type('test@example.com')
      
        // Wpisz temat wiadomości
        cy.get('#id_order').type('Zamówienie #12345')
      
        // Wpisz wiadomość
        cy.get('#message').type('To jest testowa wiadomość kontaktowa wysyłana przez Cypress.')
      
        // Kliknij przycisk Wyślij
        cy.get('#submitMessage').click()
      
        // Sprawdzenie czy wiadomość została wysłana
        cy.get('.alert-success').should('contain.text', 'Your message has been successfully sent to our team.')
      })
      

  })