import {url, username, password} from '../../../config'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'

describe('Login / Logout test', ()=>{
    before(function(){
        cy.visit(url)
        cy.intercept("GET", "https://safemode.snappet.org/safe-mode/config/settings.json").as("login")
        
    })

    it('should login to the application', function(){    
        LoginPage.login(username,password)
        //cy.wait("@login")
        //cy.wait(5000)
    })

    it('should display navbar after login', function(){
        LoginPage.displayNavBar()
    })

    it('should logout from application', ()=>{
        Navbar.logout()
    })
    
})

