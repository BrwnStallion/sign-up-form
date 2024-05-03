// ----------------------- Sign-Up Form JavaScript -----------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pseudocode ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
- When user focuses on an input control, make CSS apply invalid analysis, as 
  opposed to when the page loads
    - User focuses on any input control
    - Apply 'required' attribute. CSS should have input['required'] styles
      already defined

- When user begins to input into password fields:
   - Add the 3 or 1 divs with rqmt text
      - These actions should be moved into functions
   - Apply .fail and remove .success
      - Could just toggle .success and not do .fail, which could be default
   - Check if their input matches the 3 or 1 criteria (8 char, 1 capital, 1 num
     or matching)
        - Can have a listener for keypresses. Checks input against regex for
          each rqmt
   - If content doesn't match on any of the criteria remove .success class
      - Toggle could cause problems because we want .success to not be present
      - Should check for matching even if typing in the first password field
      - Need robust handling for if confirmation field is typed into first
        and therefore only the matching rqmt text is added to the DOM. The 
        toggling function has issues because the array is length 1 and not 4.
   - If content matches on any of the criteria, add .success
*/

"use strict";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function addRqmtDivs() {
    // Creates and appends the divs for password requirements

    // Grab password input parent div element
    const pwrdDiv = document.querySelector('.password');

    // Array for new pwrd reqmt elements
    const pwrdReqDivs = [];
    pwrdReqDivs.length = 3;

    for (let i = 0; i < 3; i++) {
        pwrdReqDivs[i] = document.createElement('div');
    };

    pwrdReqDivs[0].textContent = 'At least 8 characters';
    pwrdReqDivs[1].textContent = 'At least 1 capital letter';
    pwrdReqDivs[2].textContent = 'At least 1 number';

    pwrdReqDivs.forEach((div) => {
        pwrdDiv.appendChild(div);
    });
}

function addMatchDiv() {
    // Creates and appends the div for matching password confirmation

    // Grab confirmation element, create & append match rqmt element
    const pwrdConfDiv = document.querySelector('.password-confirmation');
    const matchDiv = document.createElement('div');
    matchDiv.textContent = 'Passwords must match';
    pwrdConfDiv.appendChild(matchDiv);
}

function toggleSuccessClass(divNumber, direction) {
    // Add/remove .success class to specified password rqmt div
    // Note: this doesn't create duplicate classes

    /*
    divNumber ranges from 0 to 3, correlating to which of the 4 possible divs
    needs to be changed to success.
    'direction' is 0 or 1 corresponding to add or remove
    */

    if (divNumber >= 0 && divNumber < 4) {
        const allRqmtDivs = document
            .querySelectorAll('.signup-fields > div div');

        switch (direction) {
            case 1:
                allRqmtDivs[divNumber].classList.add('success');
            break;
            case 0:
                allRqmtDivs[divNumber].classList.remove('success');
            break;
        };
    };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Execution ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const signupDiv = document.querySelector('.signup-fields');
signupDiv.addEventListener('focusin', (e) => {
    // Listener to alter DOM based off what field is focused on
    
    // Add required attribute if appropriate input focused
    if (e.target.nodeName === 'INPUT' && e.target.id !== 'phone') {
        e.target.setAttribute('required', 'required');
    };

    // Add pwrd rqmts if pwrd field focused, and rqmts not there already
    if (e.target.id === 'password'
        && document.querySelectorAll('.password div').length === 0) {
        addRqmtDivs();
    };

    // Add match rqmt if confirmation field focused, and rqmt not there already
    if (e.target.id === 'password-conf' &&
        document.querySelectorAll('.password-confirmation div').length === 0) {
        addMatchDiv();
    };
});

signupDiv.addEventListener('input', (e) => {
    // Listener to update the 4 pwrd rqmts as the user is entering content

    const pwrdField = document.querySelector('#password');
    const pwrdValue = pwrdField.value;
    const confirmField = document.querySelector('#password-conf');
    const confirmValue = confirmField.value;

    // Do rqmt checks only if the password fields are being typed in
    if (e.target.id === 'password' || e.target.id === 'password-conf') {

        // Check if the values match against the regex requirement
        if (e.target.id === 'password') {
            
            // Array with the 3 regex criteria for pwrd rqmts
            const regex = [];
            regex[0] = /[\w ]{8,}/g;
            regex[1] = /[A-Z]/g;
            regex[2] = /\d/g;

            // Array for success to be logged to
            const results = [];

            // Iterate through array and match against pwrd field content
            regex.forEach( (expression, index) => {
                if (pwrdValue.match(expression) !== null) {
                    // Add success class if regex match returns something
                    toggleSuccessClass(index, 1);
                    results[index] = 1;

                } else {
                    // Remove success class if regex match returns null
                    toggleSuccessClass(index, 0);
                    results[index] = 0;
                    
                };
            });

            // Sum the results array to see if all rqmts passed
            const resultsSum = results.reduce((total, result) => {
                return total + result;
            }, 0);

            // Set validity for pwrd field based on results array
            if (resultsSum === 3) {
                
                // Set field to valid
                pwrdField.setCustomValidity('');

            } else {
                
                // Set field to invalid
                pwrdField.setCustomValidity('Please fill out this field.');

            };
        };

        // Var for if any pwrd field is blank. Makes if conditions more readable
        let anyFieldBlank = confirmValue === '' || pwrdValue === '';

        /*
        Check if pwrd value matches confirm value. Only do this if the fields
        are not blank
        */
        if (pwrdValue === confirmValue && !anyFieldBlank) {

            // Show success because they match
            toggleSuccessClass(3,1);

            // Set field to valid
            confirmField.setCustomValidity('');

        } else if (pwrdValue !== confirmValue) {
            /*
            Grab the index of the last div (which is the matching div)
            Need to do this because the first 3 divs might not be created
            */
            const allRqmtDivs = document
            .querySelectorAll('.signup-fields > div div');
           
            // Remove success class (whether it's present or not)
            if (allRqmtDivs.length === 4) {
                // This case is if all rqmt divs are loaded

                toggleSuccessClass(3,0);

            } else if (allRqmtDivs.length === 1) {
                // This case is if only the matching rqmt div is loaded

                toggleSuccessClass(0,0);

            };

            // Set field to invalid
            confirmField.setCustomValidity('Please fill out this field.');

        };
    };
});

document.querySelector('button.create').addEventListener('click', (e) => {
    /*
    Listener to stop user from submitting the form before they've clicked into
    any fields, meaning those fields haven't become required yet
    */

    // Variables for content of 'required' fields (they may not yet be reqd)
    const reqdElements = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        email: document.querySelector('#email'),
        pwrd: document.querySelector('#password'),
        confirmPwrd: document.querySelector('#password-conf'),
    };
    
    // If every required field is blank. Makes the 'if' more readable
    let allReqdFieldBlank = reqdElements.firstName.value === ''
    && reqdElements.lastName.value === '' && reqdElements.email.value === ''
    && reqdElements.pwrd.value === '' && reqdElements.confirmPwrd.value === '';
    
    if (allReqdFieldBlank) {
        // User tried to submit form without entering anything in reqd fields
        
        // Set all the not-yet-reqd fields to reqd
        for (let prop in reqdElements) {
            reqdElements[prop].setAttribute('required', 'required');
        };

        // Add the rqmt divs on the pwrd fields too
        addRqmtDivs();
        addMatchDiv();
    };
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
