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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Execution ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const signupDiv = document.querySelector('.signup-section');
signupDiv.addEventListener('focusin', (e) => {
    if (e.target.nodeName === 'INPUT' && e.target.id !== 'phone') {
        e.target.setAttribute('required', 'required');
    };
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


