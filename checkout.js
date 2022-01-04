/**
* Webkul Software.
*
* @category Webkul
* @package Webkul_CasperJS
* @author Webkul
* @copyright Copyright (c) 2010-2016 Webkul Software Private Limited (https://webkul.com)
* @license https://store.webkul.com/license.html
*/

var BASE_URL = casper.cli.get('url');//'url' will be entered on terminal

// Go to home page
casper.test.comment('Go to Home Page');
casper.start(BASE_URL, function() {
    this.test.pass('Home page was loaded');
});
// Click on "Create an account Option"
casper.then(function () {
    this.click('ul.header li:last-child a:last-child');
    this.test.pass('register page was loaded');
});
// Fill Create New Customer Account form
casper.then(function () {
    this.test.info('Current location is ' + this.getCurrentUrl());
    this.fill('form#form-validate', {
        'firstname': 'John',
        'lastname': 'Doe',
        'email': 'john@doe.com',
        'password': 'Admin123',
        'password_confirmation': 'Admin123'
    }, true);
    this.capture('screenshot/form_populated.png'); //you'll see the screenshot of populated form parallel to your script.
    this.test.pass('form populated');
});

// Registration completed
casper.then(function() {
    this.test.info('Current location is ' + this.getCurrentUrl());
    this.test.pass('Registered');
});
// Account dashboard/welcome page
casper.then(function() {
    casper.wait(2000, function () {
        this.capture('screenshot/dashboard.png'); //you'll see the screenshot of Dashboard parallel to your script.
        this.test.pass('Dashboard In');
    });
});
casper.run(function () {
    this.test.done();
});

