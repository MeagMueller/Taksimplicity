// *****ISSUE 1: LOGIN*****

// Given a user wants access Taksimplicity
// When a opens the application
// Then the user should see a welcome message
    // landing page? Welcome message in pop up or just on page? **definitely click button to get to form** 
// And see a form to input a username and password
    // after button click, populates on page
// And click an affordance to process the information
    // waiting screen? Probably not necessary

// Given a user enters their information
// When the user clicks the affordance
// Then the user should be taken to their personal account information
    // session storage and what not -- this is super neat

// *****ISSUE 2: ADD PERFORMANCE*****

// Given a user wants to enter a new performance/workshop/etc.
// When the user clicks an affordance
    // button 
// Then the user should be presented with a form with the following properties
    // inputs with the following
// Name of event
// Location
// Date
// And have a checkbox to click if the performance is paid or not
    // checkbox availability
// And have the ability to specify whether this is a solo performance or a troupe
    // another checkbox, and then maybe a drop down to choose which troupe if in multiple?
// And have the ability to select a dance style for the performance
    // drop down, most likely - names in alphabetical order
// And have the ability to add props if necessary
    // another drop down
    
// Given a user specifies that a performance is with a troupe
// When a user is presented with his or her events
// Then troupe and personal should be differentiated
    // troupe performances in different colors, colors chosen when adding a troupe to your account - might be a stretch goal!

// *****ISSUE 3: EDIT PERFORMANCE*****

// Given a user wants to edit a performance/workshop/etc.
// When the user clicks an “edit” affordance
    // button
// Then the user should be presented with the information in a prefilled-form
    // pre-filled inputs -research this soon

// Given the user has completed editing the above event
// When the user clicks on a save affordance or presses enter
    // save button and enter press - I believe was available back several projects ago - enter is a specific number with a keypress event
// Then the information should be updated and the display should reflect the change
    // PATCH and GET and POST

// Given a user wants to remove a performance/workshop/etc.
// When a user clicks a “remove” affordance
    // button
// Then the user should be presented with a confirmation pop up
    // alert, perhaps? With buttons? Does that happen?
// And should be able to confirm or deny the deletion

// Given a user confirms a delete
    // clicks the button, Frank
// When the user is returned to the events screen
    // not sure how to do this rerouting business
// Then the information should be removed and the display should reflect the change
    // GET and POST here

// *****Issue 4(well, 8 technically but that's just because I had to split them up anyway): DELETE PERFORMANCE*****

// Given a user wants to remove a performance/workshop/etc.
// When a user clicks a “remove” affordance
    // button
// Then the user should be presented with a confirmation pop up
    // again, alert? With buttons?
// And should be able to confirm or deny the deletion
    // so many buttons

// Given a user confirms a delete
// When the user is returned to the events screen
    // routing back to page again
// Then the information should be removed and the display should reflect the change

// *****ISSUE 5: ADD PROP*****

// Given the user wants to add a prop to the collection
// When the user clicks an affordance labeled “props”
    // I'm thinking I'll need a navbar
// Then the user will be directed to “props”

// Given the user wants to add a new prop
// When the user clicks an affordance labeled “add new prop”
// Then the user is provided a form with an input to add a new prop

// Given the user has added the information for a new prop
// When the user clicks an affordance labeled “add to collection”
// Then the user should be redirected back to their props list
// And the user’s list should be updated with the new prop
    // All of the above will be the same process - make a function that builds all of them? 
    // Props list - add an images ability? Stretch goal
    // Props list - GET, PATCH, GET, POST

// *****Issue 6: EDIT PROP*****

// Given the user wants to edit the information for a prop
// When the user clicks an affordance labeled “edit”
// Then the user should be presented with a prefilled form
// And once the information is altered, have to click an affordance to save changes

// Given the user has clicked the affordance
// When it has processed
// Then the user is directed back to the list of props
// And it has updated to reflect the changes

    // Again, all same as above - these processes can be streamlined

// *****Issue 7: DELETE PROP*****

// Given the user wants to delete a prop
// When the user clicks an affordance labeled “remove” or “delete”
// Then the user should be presented with a confirmation pop up
// And should be able to confirm or deny the deletion

// Given a user confirms a delete
// When the user is returned to the props screen
// Then the information should be removed and the display should reflect the change

    // ^^^^

// *****Issue 8 (really 4 but y'knooooow): CALENDAR*****

// Given the user wants to see his or her events in the calendar
    // CALENDAR...that's going to be interesting. Will have to research this
// When the user clicks an affordance labeled “calendar”
    // again in the navbar
// Then the user will be directed to a calendar view
    // calendar page

// Given the user wants a quick view of event information
// When the user hovers over the link on the calendar
    // ooooo...hover event
// Then the user will see a quick view pop up
    // not sure how to do this but if someone with access to Angelfire in 1999 could do it, so can I

// Given the user wants to go to the event page
// When the user clicks the affordance
// Then the user will be directed to the event page
    // More navbar

    // Guess I'm making a navbar

// STRETCH GOALS:

// Profile page with access to all styles known and functionality to add a new style