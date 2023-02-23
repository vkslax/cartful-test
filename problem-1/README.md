# Problem 1 - Responsive Web React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Integrations, libraries and tools used:
- Styled components will be used to style the components.
- React Router Dom will be used to handle the routing. (Back/Next buttons).
- ESLint was added in order to improve code quality and readability.


### Notes
- FontAwesome was added only to render the header's menu icon because of time reasons
  since Figma was only using bars.
- components folder could be divided into more folders, but I decided to keep it simple
  for the sake of time. (e.g. components/atoms, components/molecules, components/organisms if atomic design is used).
- Same as components folders, assets folder could be reorganized to have a folder for each type of asset and result (e.g. brews, coffee types, roast levels, etc.).
- Due to React Router 6.x and React Strict Mode, the root component seems to render twice in development mode.

### Pending integrations: 
- Prettier to format the code.
- Tests and jest coverage configuration.
- Husky and lint-staged to run ESLint on pre-commit.


## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
