# The task is to have a frontend for list of users in the company. Basically, it will have a single screen – a list (table?) of users, and a set of APIs that would just hit the mock providers.

Here is the workflow desired:

## Get data from API

- Display that data in table: **DONE**
- Sort data in the table (by name, by email, by company name): **DONE**
- Create a new user: **DONE**
- Should open a modal window with the list of fields: **DONE**
- Remove the user (icon in the table): **DONE**

## Couple of technical requirements:

- Please use https://jsonplaceholder.typicode.com/ for API requests: **DONE**
- All interaction with API organize using class (classes): **DONE**, Axios instance
  - NOTE: this is not about functional (hooks) vs class approach in React.JS – this is just to make sure we have a separate file with class API(s).
- Use react store context for a data store: **DONE**, React Context API
- I would love to see _some_ unit and/or component testing code. May be not even fully implemented but at least the path should be there.: **DONE**, small unit tests

As for styles, do not go over the board but do not have a minimalistic page as well. If you will be using Bootstrap or Material or something similar, please still add a few of your own custom styles so we can see how you create them. **DONE**, styled-components in the `./src/components/elements/Hero.jsx' component.


## Outcomes

It took me 3.5 hours to do this from the scratch. 
