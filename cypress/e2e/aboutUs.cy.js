describe('About us', () => {
    
   
    it('1 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="About us"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('2 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="Terms and conditions of use"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('3 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="About us"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('4  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="Terms and conditions of use"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('5  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="About us"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('6  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="Terms and conditions of use"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('7  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="About us"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('8  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="Terms and conditions of use"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('9  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="About us"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('10  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="Terms and conditions of use"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('11 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="About us"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

      it('12 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
    
        // Scrolluj na dół strony do stopki
        cy.scrollTo('bottom')
    
        // Kliknij link "About us" w stopce
        cy.get('footer a[title="Terms and conditions of use"]').click()
        cy.wait(10000) // 10 000 ms = 10 sekund
    
        // Sprawdzenie, czy pojawia się komunikat o błędzie
        cy.get('.alert.alert-danger, .alert.alert-warning, .alert.alert-error', { timeout: 10000 })
          .should('be.visible')
      })

  })