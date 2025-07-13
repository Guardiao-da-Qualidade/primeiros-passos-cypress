class MenuPage {
    selectorList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',    
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }

        return selectors
    }

    accessMyInfo () {
        cy.get(this.selectorList().myInfoButton).click()
    }

    accessPerformance () {
        cy.get(this.selectorList().performanceButton).click()
    }
   
}

export default MenuPage;


