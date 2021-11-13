// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import {
    fetchTravelerData, 
    fetchAllTrips,
    fetchAllDestinations
} from './apiCalls.js';

import Traveler from './Traveler';
import DestinationRepository from './DestinationRepository';


let getRandomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let currentTravelerID = getRandomIndex(1,50);

const fetchAllData = () => {
    Promise.all([fetchTravelerData(), fetchAllTrips(), fetchAllDestinations()])
        .then(data => {
            let allTravelers = data[0];
            let allTrips = data[1];
            let allDestinations = data[2];

        });
}


