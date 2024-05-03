Sign-Up Form Laundry List

05/02/24 (rqmt_js)
- Add JS password verification (for same password in each field)
    - COMPLETE
- Consider adding password guidance popup markup
    - COMPLETE
- Can use JS to apply the styles if conditions are met (regex would be in
      JS)
        - JS can apply success or fail to the relevant div
    - COMPLETE
- Fix match verification not working if only one character
    - This might be acceptable. Can add something that only shows matching if
      the 3 rqmts are also met?
    - COMPLETE
- Adjust styles to stop the extra valid/invalid feedback on pwrd fields
    - Removed spans from markup
    - COMPLETE
- Remove red font color from invalid styles
    - COMPLETE
- Figure out why number rqmt isn't updating always
    - COMPLETE
- Make pwrd fields be valid when JS says they're valid
    - COMPLETE
- Don't allow form submission if the mandatory fields aren't filled

04/30/24
- Add regex pattern for passwords
- Figure out why email pattern accepts input w/o a domain
- Add tooltips or some direction to the user about what the restrictions are on
  input
- Add JS password verification (for same password in each field)
- Consider adding required/optional tag/note to fields markup/CSS for UX
- Consider adding password guidance popup markup
    - Can use the x and check icons
    - Can use JS to apply the styles if conditions are met (regex would be in
      JS)
    - Need to make sure that the markup wouldn't move around in a weird way
- Add styles to the button

04/29/24
- Add regex pattern for last name
    - Complete
- Add regex pattern for passwords
- Figure out why email pattern accepts input w/o a domain
- Add tooltips or some direction to the user about what the restrictions are on
  input
- Figure out how to restrict phone number input without making it a reqd field
    - Complete
- Add JS password verification (for same password in each field)
- Consider removing valid input colors (feels kinda busy). User maybe only needs
  to know if their input is invalid. Valid could be assumed.
    - Complete
- Add 'x' and check characters after fields
    - Complete