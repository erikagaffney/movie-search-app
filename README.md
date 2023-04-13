# movie-search-app

Search for movies powered by the online movie database (OMDb).

By [Erika Gaffney](mailto:erikagaffney.2014@gmail.com)

[erikagaffney github](https://github.com/erikagaffney)

## Running the Application Locally

1. Ensure you have [NodeJS](https://nodejs.org/en/download) v18 installed
2. Close locally using `git clone https://github.com/erikagaffney/movie-search-app.git`
3. Install dependencies using `npm install`
4. Run tests without watch mode using `npm run test:ci`
   <br>4a. Run tests with coverage using `npm run test:coverage`
5. Start your server using `npm run start`
6. Navigate to app in [browser](http://localhost:3000)

## Disussion

- Languages Used: HTML, CSS, React, Jest, and Javascript
- This app was created with [CRA (create react app)](https://create-react-app.dev/)

## Requirements

The original requirements were:

- Consume the OMDB web API's "By Search" functionality to display information about at least ten movies in a format like a list or grid.
  - The results table that comes up after a search is a demonstration of the OMDB web API's "By Search" functionality
- Consume the OMDB web API's "By ID" functionality to allow a user to click on a movie item to view the details.
  - The details collapsable drawer under the main movie title is a demonstration of the OMDB web API's "By ID" functionality

Required:

- Use more than one React component
  - The search bar, movie table, and no results screen are all separate react components, as well as being made up of smaller components.
- Use both state and props
- Demonstrate knowledge of component lifecycle

Bonus:

- Use MUI, a React library for Google's Material Design...and a project started here at Text-Em-All. 🤓
  - Most building block components used to build this application are from MUI

Use TypeScript: TBD
