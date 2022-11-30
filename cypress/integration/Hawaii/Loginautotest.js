
describe('Тестирование формы авторизации', function () {
   it('Проверка позитивных кейсов', function () {
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
        cy.get('.SignIn__login > .InputBox').type('a.dzhumagalieva96@mail.ru');
        cy.get('.SignIn__password > .InputBox').type('7334773Aliya');
        cy.get('.SignIn__button').click();
        cy.get('.HeaderUserName').click();
        cy.get('.UserMenu__menu-list > [href="https://www.citilink.ru/profile/orders/"]').click();
    })
})



 {
   it('Проверка негативных кейсов', function () {
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
        cy.get('.SignIn__login > .InputBox').type('a.dzhumagalieva96@mail.ru');
        cy.get('.SignIn__password > .InputBox').type('7334773Aliy');
        cy.get('.SignIn__button').click();
    })
}
