// ----------------------- Sign-Up Form JavaScript -----------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pseudocode ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
- When user focuses on an input control, make CSS apply invalid analysis, as 
  opposed to when the page loads
    - User focuses on any input control
    - Apply 'required' attribute. CSS should have input['required'] styles
      already defined
*/

"use strict";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Execution ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const inputControls = document.querySelectorAll('input');
const signupDiv = document.querySelector('.signup-section');
signupDiv.addEventListener('focusin', (e) => {
    if (e.target.nodeName === 'INPUT') {
        e.target.setAttribute('required', 'required');
    };
});