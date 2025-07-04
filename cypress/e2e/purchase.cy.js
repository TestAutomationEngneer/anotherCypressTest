describe('Przejście do strony kontaktowej', () => {
    
    it(' 1 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt1')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('2 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt2')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('3 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt3')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('4 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt4')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('5 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt5')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('6 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt6')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('7 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt7')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('8 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt8')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('9 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt9')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('10 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt10')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('11 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt11')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('12 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt12')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('13 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt13')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

      it('14 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt14')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })
      it('15 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
      
        // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
        cy.get('#search_query_top').type('tshirt15')
        cy.get('button[name="submit_search"]').click()
      
        // Sprawdź komunikat o braku wyników
        cy.get('.alert.alert-warning')
          .should('contain.text', 'No results were found for your search')
      })

  })