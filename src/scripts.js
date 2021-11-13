// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import domUpdates from './domUpdates';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import {
    fetchTravelerData, 
    fetchAllTrips,
    fetchAllDestinations
} from './apiCalls.js';

import Traveler from './Traveler';
import DestinationRepository from './DestinationRepository';
import TripRepository from './TripRepository';
import TravelerRepository from './TravelerRepository';

let getRandomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let currentTravelerID = getRandomIndex(1,50);
let currentTraveler;
let tripRepository;
let travelerRepository;
let destinationRepository;

const fetchAllData = () => {
    Promise.all([fetchTravelerData(), fetchAllTrips(), fetchAllDestinations()])
        .then(data => {
            let allTravelers = data[0];
            let allTrips = data[1];
            let allDestinations = data[2];

            tripRepository = new TripRepository(allTrips);
            destinationRepository = new DestinationRepository(allDestinations)
            travelerRepository = new TravelerRepository(allTravelers);

            getCurrentUser()
        });
}

const parseAllData = (data) => {

}

const getCurrentUser = ()) => {
    const randomTraveler = travelerRepository.getTraveler(currentTravelerID);
    const randomTravelerTrips = tripRepository.getTripDataFor(currentTravelerID);
    currentTraveler = new Traveler(randomTraveler, randomTravelerTrips);
}


