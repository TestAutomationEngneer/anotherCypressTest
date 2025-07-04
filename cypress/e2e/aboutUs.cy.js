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

    it('13 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('14 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('15 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('16  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('17  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('18  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('19  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('20  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('21  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('22  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('23 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('24 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('25 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('26 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('27 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('28  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('29  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('30  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('31  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('32  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('33  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('34  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('35 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('36 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('37 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('38 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('39 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('40  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('41  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('42  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('43  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('44  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('45  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('46  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('47 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('48 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('49 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('50 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('51 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('52  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('53  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('54  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('55  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('56  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('57  Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('58  Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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

    it('59 Powinien scrollować na dół i kliknąć About Us w stopce, potem sprawdzić błąd', () => {
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

    it('60 Powinien scrollować na dół i kliknąć terms  w stopce, potem sprawdzić błąd', () => {
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