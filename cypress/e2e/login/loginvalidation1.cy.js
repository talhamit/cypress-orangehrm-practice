describe('OrangeHRM Login Validation', () =>{

const username = 'input[placeholder="Username"]';
const password = 'input[placeholder="Password"]';
const submitBtn = 'button[type="submit"]';

    beforeEach(() =>{
        cy.visit('/auth/login')        
    });


    
    it('Empty Field Validation', () =>{

        cy.get(submitBtn).click();
        
        cy.get(username)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');

        cy.get(password)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
    })


    it('Valid username Empty password', ()=> {

         cy.get(username).type('Admin');
         cy.get(submitBtn).click();
         cy.get(password)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
    })

    it('Invalid username Empty password', ()=> {

         cy.get(username).type('dmin');
         cy.get(submitBtn).click();
         cy.get(password)
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
    })

     it('Empty username valid password', ()=> {

         cy.get(password).type('admin123');
         cy.get(submitBtn).click();
         cy.get(username)
            .closest('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
    })


    it('Empty username invalid password', ()=> {

         cy.get(password).type('11111');
         cy.get(submitBtn).click();
         cy.get(username)
            .closest('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
        })


    it('Invalid username valid password', ()=> {

         cy.get(username).type('dmin');
         cy.get(password).type('admin123');
         cy.get(submitBtn).click();
         cy.get('.oxd-alert-content-text').should('contain.text','Invalid credentials')
         
    })

    it('Valid username invalid password', ()=> {

         cy.get(username).type('admin');
         cy.get(password).type('admin1');
         cy.get(submitBtn).click();
         cy.get('.oxd-alert-content-text').should('contain.text','Invalid credentials')
         
    })

    it('inValid username invalid password', ()=> {

         cy.get(username).type('aadmin');
         cy.get(password).type('admin1');
         cy.get(submitBtn).click();
         cy.get('.oxd-alert-content-text').should('contain.text','Invalid credentials')
         
    })

    it('Forget Password', () => {
            cy.get('.orangehrm-login-forgot p.orangehrm-login-forgot-header')
                .should('be.visible')
                .and('contain.text','Forgot your password? ').click()
            cy.url().should('include','/auth/requestPasswordResetCode')
    })


    it('Verify the social icons', () =>{
            const social_icon = ["linkedin","facebook","twitter.com","youtube"]

            social_icon.forEach((item,index) =>{
               
                cy.get('.orangehrm-login-footer-sm a').eq(index).invoke('attr','href').should('contain',item);
                cy.get('.orangehrm-login-footer-sm a').eq(index).click()
            })
    })


    it('Check Footer orangeHrm link', () =>{
           cy.wait(300)
           cy.get('p.orangehrm-copyright a').click()
    })


   

    














})