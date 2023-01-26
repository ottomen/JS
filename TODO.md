# The task is to have a frontend for list of users in the company. Basically, it will have a single screen – a list (table?) of users, and a set of APIs that would just hit the mock providers.

Here is the workflow desired:

## Get data from API

- Display that data in table
- Sort data in the table (by name, by email, by company name)
- Create a new user
- Should open a modal window with the list of fields
- Remove the user (icon in the table)

## Couple of technical requirements:

- Please use https://jsonplaceholder.typicode.com/ for API requests
- All interaction with API organize using class (classes)
  - NOTE: this is not about functional (hooks) vs class approach in React.JS – this is just to make sure we have a separate file with class API(s).
- Use react store context for a data store
- I would love to see _some_ unit and/or component testing code. May be not even fully implemented but at least the path should be there.

As for styles, do not go over the board but do not have a minimalistic page as well. If you will be using Bootstrap or Material or something similar, please still add a few of your own custom styles so we can see how you create them.
