describe('Login Validity', () =>{

    //beforeEach(() => {
        // cy.session('Orange HRM login', ()=> {
        // cy.visit('/auth/login');
        // cy.get('input[placeholder="Username"]').type('Admin');
        // cy.get('input[placeholder="Password"]').type('admin123');
        // cy.get('button[type="submit"]').click();
        // cy.contains("Dashboard").should('be.visible');

        //})

        it('Validate Empty Field', ()=> {

         cy.visit('auth/login');
         cy.get('button[type="submit"]').click();
         cy.get('input[name="username"]').closest('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
         cy.get('input[name="password"]').parents('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
        })

         it('Valid username Empty password', ()=> {

         cy.visit('auth/login');
         cy.get('input[placeholder="Username"]').type('Admin');
         cy.get('button[type="submit"]').click();
         cy.get('input[name="password"]').parents('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
        })

        it('Invalid username Empty password', ()=> {

         cy.visit('auth/login');
         cy.get('input[placeholder="Username"]').type('dmin');
         //cy.get('input[placeholder="Password"]').type('');
         cy.get('button[type="submit"]').click();
         //cy.get('input[name="username"]').closest('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
         cy.get('input[name="password"]').parents('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
        })

        it('Invalid username valid password', ()=> {

         cy.visit('auth/login');
         cy.get('input[placeholder="Username"]').type('dmin');
         cy.get('input[placeholder="Password"]').type('admin123');
         cy.get('button[type="submit"]').click();
         cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
         
        })

        it('Valid username invalid password', ()=> {

         cy.visit('auth/login');
         cy.get('input[placeholder="Username"]').type('admin');
         cy.get('input[placeholder="Password"]').type('admin1');
         cy.get('button[type="submit"]').click();
         cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
         
        })

        it('inValid username invalid password', ()=> {

         cy.visit('auth/login');
         cy.get('input[placeholder="Username"]').type('aadmin');
         cy.get('input[placeholder="Password"]').type('admin1');
         cy.get('button[type="submit"]').click();
         cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
         
        })

        it('Empty username valid password', ()=> {

         cy.visit('auth/login');
         //cy.get('input[placeholder="Username"]').type('Admin');
         cy.get('input[placeholder="Password"]').type('admin123');
         cy.get('button[type="submit"]').click();
         cy.get('input[name="username"]').closest('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
         //cy.get('input[name="password"]').parents('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
        })

        it('Empty username invalid password', ()=> {

         cy.visit('auth/login');
         //cy.get('input[placeholder="Username"]').type('Admin');
         cy.get('input[placeholder="Password"]').type('11111');
         cy.get('button[type="submit"]').click();
         cy.get('input[name="username"]').closest('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
         //cy.get('input[name="password"]').parents('.oxd-input-group').find('.oxd-input-field-error-message').should('have.text', 'Required');
        })

        it('Forget Password', () => {
            cy.visit('auth/login');
            cy.get('.orangehrm-login-forgot').should('be.visible').and('have.text','Forgot your password? ').click()
            cy.url().should('include','/auth/requestPasswordResetCode')
        })


        
        it('Verify the social icons', () =>{
            const social_icon = ["linkedin","facebook","twitter.com","youtube"]
            var i=0;
            social_icon.forEach(item =>{
               
                cy.visit('/auth/login');
                cy.get('.orangehrm-login-footer-sm a').eq(i).invoke('attr','href').should('contain',item);
                cy.get('.orangehrm-login-footer-sm a').eq(i).click()
                i++;
                //cy.url().should('contain',item)
            })
         })

         it.only('Check Footer orangeHrm link', () =>{

            cy.visit('/auth/login')
            cy.get('p.orangehrm-copyright a').click()
        })


    })
    


