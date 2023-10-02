import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://www.demoblaze.com/`;


test('test_cafe', async t => {

    await t
    .maximizeWindow()
    
    //reg
    .click('#signin2')
    .click('sign-username').typeText('poiuuiop')
    .click('sign-password').typeText('1234')
    .click(Selector().withText('Sign up'))
    
    .click('#logout2')
        
        .click('#login2')
        .click('#loginusername')
        .typeText('poiuuiop')
        .click('#loginpassword').typeText('1234')
        .click(Selector('button').withText('Log in'));
         //entry point
        wait(1000)

});