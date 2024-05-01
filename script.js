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
        console.log(allRqmtDivs);

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

const signupDiv = document.querySelector('.signup-section');
signupDiv.addEventListener('focusin', (e) => {
    if (e.target.nodeName === 'INPUT' && e.target.id !== 'phone') {
        e.target.setAttribute('required', 'required');
    };
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
addRqmtDivs();
addMatchDiv();

signupDiv.addEventListener('keyup', (e) => {
    if (e.target.id === 'password') {

        // Get the value in the field
        let fieldValue = e.target.value;

        // Check if the values match against the regex requirement

        // Check if confirm field matches (if going back and editing)
        // Only do this if confirm field is not blank

    } else if (e.target.id ==='password-conf') {
        // Get the value in the field
        let fieldValue = e.target.value;

        // Check if the value matches what's in the password field
        if (fieldValue === document.querySelector('#password').value) {

            // Show success because they match
            toggleSuccessClass(3,1);

        } else {

            // Otherwise remove success class (whether it's present or not)
            toggleSuccessClass(3,0);

        };
    };
});

const inputElement = document.querySelector('#password');