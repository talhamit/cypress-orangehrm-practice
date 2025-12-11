describe("Verify Update Password functionality", () =>{

const updatepage= '/pim/updatePassword';
const passwordFields = 'input.oxd-input[type="password"]'
    beforeEach(()=>{
        cy.session('Hrm Session',()=>{
            cy.loginHRM();
        });

        cy.visit(updatepage); //first visit update password url//

    });


    it(" Verify Empty Field Error message" , () =>{

        //cy.visit(updatepage);
        cy.get(passwordFields).eq(0);
        cy.get(passwordFields).eq(1);
        cy.get(passwordFields).eq(2);
        cy.contains('button.oxd-button--secondary[type="submit"]','Save').click();
        
        //Check Current Password field error message 

        cy.get(passwordFields).eq(0)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text','Required')

        //Check New Password field error message  

        cy.get(passwordFields).eq(1)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Required');
        
        //Check Confirm Password field Error message
        cy.get(passwordFields).eq(2)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Passwords do not match');
        
    })


    it('Check new password field character limit message ', () =>{

        

        cy.get(passwordFields).eq(1).type('abc123')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Should have at least 7 characters');
    })

    it('Verify Empty current password field Remaining valid data ', () =>{

        cy.get(passwordFields).eq(1).type('abc1234');
        cy.get(passwordFields).eq(2).type('abc1234');
        cy.contains('button.oxd-button--secondary[type="submit"]','Save').click();
        // check the error message//
        cy.get(passwordFields).eq(0)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Required');
    })


    // Test fail or bug ... old password should be 7 Character long //
    it('Verify Current Password lenght', () =>{

        cy.get(passwordFields).eq(0).type('abc');
        cy.contains('button.oxd-button--secondary[type="submit"]','Save').click();
   
    })

    it('Verify new password empty field error message', ()=>{

        cy.get(passwordFields).eq(0).type('admin123');
        
        cy.get(passwordFields).eq(2).type('admin1234');
        cy.contains('button.oxd-button--secondary[type="submit"]','Save').click();

        cy.get(passwordFields).eq(1)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Required');

    })


    it.only('Verify new password Your "password must contain minimum 1 lower-case letter" message', ()=>{
       
        cy.get(passwordFields).eq(1).type('1234567');
        

        cy.get(passwordFields).eq(1)
            // .parents('.oxd-grid-item')
            // .find('.oxd-chip.oxd-chip--default.orangehrm-password-chip')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Your password must contain minimum 1 lower-case letter');

    })
    

    it('Verify confirm password empty field error message', ()=>{

        cy.get(passwordFields).eq(0).type('admin123');
        
        cy.get(passwordFields).eq(1).type('admin1234');

        cy.contains('button.oxd-button--secondary[type="submit"]','Save').click();

        cy.get(passwordFields).eq(2)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('have.text', 'Passwords do not match');

    })
    







})