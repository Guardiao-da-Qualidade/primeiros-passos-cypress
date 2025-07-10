// login sucesso 1

import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
     usernameField: "[name='username']",
     passwordFiedl: "[name='password']",
     loginButton:"[type='submit']",
     sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
     dashboardGrid: ".orangehrm-dashboard-grid",
     wrongCredentialAlert: '.oxd-alert',
     myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
     firstNameField: "[name='firstName']",
     middleNameField: "[name='middleName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input--active",
     dateField: "[placeholder='yyyy-dd-mm']",
     genericCombobox: ".oxd-select-text--arrow",
     dateCloseButton: ".--close",
     submitButton: ".orangehrm-left-space",

    
    }

  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFiedl).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenceNumberTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-10-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2030-10-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

  })

it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordFiedl).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})

