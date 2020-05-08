# Scaffold app

## My Updates
### Prime tech stack
- node v12.9.0
- yarn 1.15.2
- React 16.9.0

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner using the jest.config.js<br>

### `yarn lint`

Tests the code on linting, formatting challenges.

### `yarn build`

Builds the app for production to the `build` folder.<br> Your app is ready to be deployed!

### Troubleshooting

If you face issues or errors in `yarn start` then you can run code saved in  `build` folder by copying it to any Web Server.

## More info

Other packages used are:
- Husky to commit the code with validations like linting.
- Eslint to check the code.
- Enzyme to test the components.
- Jest for unit testing.
- Added Rule in .eslintrc.json to exclude PropTypes: react/forbid-prop-types . Please excuse me to skip prop-types due to lack of time.


## Naming Conventions

- The name of the components should be of the format ${CONTEXT}${PURPOSE}, like UserList.js or TeamCreateEditForm.js
- Action names should be prefixed with the name of your application, such as my-app/USER_LIST_GET_REQUESTED.


## Rules

- Reading state: Use reselect to create selectors, never access the state directly (only use selectors). 
- Furthermore, if we make a rule that you can only access the redux store via selector functions this will make the whole application much more maintainable and predictable, not to mention potentially faster.
- Side-Effectful Updates: Use mapDispatchToProps to dispatch *_REQUESTED actions, and a side-effect handler like redux-saga to listen for these “requests”, process them, and dispatch the relevant *_SUCCEEDED or *_FAILED actions, ex- Now we write a saga to listen for the action my-app/USER_LIST_GET_REQUESTED.
- Data validation: create schema for validation.

- Duck pattern
A module...
    MUST export default a function called reducer()
    MUST export its action creators as functions
    MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
    MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

