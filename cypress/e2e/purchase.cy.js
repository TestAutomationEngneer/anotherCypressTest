describe('Zakupy', () => {

  it(' 1 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt1')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund


    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }



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
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('3 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt3')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('4 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt4')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('5 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt5')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
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
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('8 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt8')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
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
    cy.wait(10000) // 10 000 ms = 10 sekund

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
    cy.wait(10000) // 10 000 ms = 10 sekund

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

  it(' 16 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt1')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund


    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }



    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('17 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt2')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('18 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt3')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('19 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt4')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('20 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt5')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('21 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt6')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('22 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt7')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('23 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt8')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('24 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt9')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('25 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt10')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('26 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt11')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('27 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt12')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('28 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt13')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('29 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt14')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })
  it('30 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt15')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it(' 31 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt1')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund


    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }



    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('32 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt2')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('33 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt3')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('34 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt4')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('35 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt5')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('36 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt6')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('37 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt7')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('38 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt8')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      // Celowo błędne expected (fail)
      cy.get('.alert.alert-warning').should('contain.text', 'fksdfghsjg ')
    } else {
      // Poprawne expected (pass)
      // Sprawdź komunikat o braku wyników
      cy.get('.alert.alert-warning').should('contain.text', 'No results were found for your search')
    }
  })

  it('39 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt9')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('40 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt10')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('41 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt11')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('42 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt12')
    cy.get('button[name="submit_search"]').click()
    cy.wait(10000) // 10 000 ms = 10 sekund

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('43 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt13')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

  it('44 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt14')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })
  it('45 Powinien wpisać tshirt w wyszukiwarce i sprawdzić brak wyników', () => {
    cy.visit('http://www.automationpractice.pl/index.php')

    // Wpisz "tshirt" w pole wyszukiwania i kliknij ikonę lupy
    cy.get('#search_query_top').type('tshirt15')
    cy.get('button[name="submit_search"]').click()

    // Sprawdź komunikat o braku wyników
    cy.get('.alert.alert-warning')
      .should('contain.text', 'No results were found for your search')
  })

})