This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). By default this does not include Redux, so that has been installed separately.

## To run the project

Clone this repository, and install dependencies using one of these:

### `npm install`

### `yarn`

CD to the project directory, and run either:

### `npm start`

### `yarn run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Overview

The contacts data is pulled in from a mocked back-end using Mockaroo.
Each call will return 64 records of randomly-generated data as a JSON array of objects.
The call should only take place on App initialisation, so to refresh data, refresh the page.

## Not done

### Search functionality.

This due to the use of the mocked back-end.
While it is possible to mock a crude search ability, it is difficult to see how to make this compatible with the requirement to display number of contacts with given prefix (requirement 4).
So a search functionality would really be a filtering of the existing `contacts` data, and not a realistic back-end integration.

### Map and Search summary

This due to a lack of time.
Also, the mock data created some very strange addresses, so it was unclear how valid these results were likely to be.
