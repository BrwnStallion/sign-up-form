// ----------------------- Sign-Up Form JavaScript -----------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pseudocode ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
- When user focuses on an input control, make CSS apply invalid analysis, as 
  opposed to when the page loads
    - User focuses on any input control
    - Apply 'required' attribute. CSS should have input['required'] styles
      already defined

- When user begins to input into password fields:
   - Add the 3 or 1 divs with rqmt text. Add the red x content
   - Apply .fail and remove .success
   - Check if their input matches the 3 or 1 criteria (8 char, 1 capital, 1 num
     or matching)
   - If content doesn't match on any of the criteria, add the .fail class, and
     remove .success class
   - If content matches on any of the criteria, add .success and remove .fail
*/

"use strict";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Execution ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const signupDiv = document.querySelector('.signup-section');
signupDiv.addEventListener('focusin', (e) => {
    if (e.target.nodeName === 'INPUT' && e.target.id !== 'phone') {
        e.target.setAttribute('required', 'required');
    };
});

