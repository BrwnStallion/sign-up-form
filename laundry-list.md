Sign-Up Form Laundry List

05/02/24
- Consider adding required/optional tag/note to fields markup/CSS for UX
- Add placeholder for phone number input field
- Add JS logic to prevent user from submitting empty form, since required
  attribute is applied only after focusing on a field

05/01/24
- Add JS password verification (for same password in each field)
- Consider adding required/optional tag/note to fields markup/CSS for UX
- Consider adding password guidance popup markup
- Can use JS to apply the styles if conditions are met (regex would be in
      JS)
        - JS can apply success or fail to the relevant div
- Rework focus border to make its colors more consistent with the palate
- Increase the line spacing maybe for the intro text
    - COMPLETE
- Add placeholder for phone number input field

04/30/24
- Add regex pattern for passwords
- Figure out why email pattern accepts input w/o a domain
- Add tooltips or some direction to the user about what the restrictions are on
  input
- Add JS password verification (for same password in each field)
- Consider adding required/optional tag/note to fields markup/CSS for UX
- Consider adding password guidance popup markup
    - Can use the x and check icons
        - COMPLETE
    - Can use JS to apply the styles if conditions are met (regex would be in
      JS)
        - JS can apply success or fail to the relevant div
    - Need to make sure that the markup wouldn't move around in a weird way
        - inputHeight(--fontSizeInput + --inputPadTop + --inputPadBtm
          + 6px[border]) + --fontSizeLabel + rqmtHeight(--fontSizeLabel * 3)
          + desired padding
        - COMPLETE
- Add styles to the button
    - COMPLETE
- Rework focus border to make its colors more consistent with the palate

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