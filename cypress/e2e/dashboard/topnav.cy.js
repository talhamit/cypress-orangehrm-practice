describe('Top Nav Menu', () => {

    
   // const aa = visitDash + '/pim/updatePassword'

    beforeEach(()=>{
        cy.session('Hrm Session',()=>{
            cy.loginHRM();
        });
        cy.visit('/dashboard/index');
    });


    it("Verify Dashboard", ()=>{
        
        cy.contains("Dashboard").should("be.visible");
    })


    it('Verify nav Dropdown', () =>{
        
      
        cy.get('.oxd-userdropdown').click();
        cy.get('.oxd-userdropdown').should('have.class','--active')

    })


    it('Verify About link', () =>{
        
        //click on dropdown icon
        cy.get('.oxd-userdropdown').click();
        //click on about link
        cy.contains('a.oxd-userdropdown-link', 'About').click();
        //Verify we are on about box
        cy.get("div[role='document']").should('contain','About')
        //now close the about box
        cy.get('.oxd-dialog-close-button.oxd-dialog-close-button-position').click();
    })

    it("Verify Support link", ()=>{
        
        cy.get('.oxd-userdropdown').click();
        cy.contains('a.oxd-userdropdown-link', 'Support').click();
        cy.url().should('include', 'help/support')
    })

    it(' Verify Change Password link', () =>{

        
        cy.get('.oxd-userdropdown').click();
        cy.contains('a.oxd-userdropdown-link', 'Change Password').click();
        cy.url().should('include','/pim/updatePassword');   
        
    })

    it('Verify Logout', () =>{
        
        Cypress.on('uncaught:exception', () => false);

        
        cy.get('.oxd-userdropdown').click();
        cy.contains('a.oxd-userdropdown-link', 'Logout').click();
        cy.wait(3000);
        cy.url().should('include','/auth/login');
        cy.contains('button', 'Login').should('be.visible');


    })

    



})