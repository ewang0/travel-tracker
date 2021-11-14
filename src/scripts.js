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
    fetchAllDestinations,
    postTripRequest
} from './apiCalls.js';

import Traveler from './Traveler';
import DestinationRepository from './DestinationRepository';
import TripRepository from './TripRepository';
import TravelerRepository from './TravelerRepository';

let getRandomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let currentTravelerID = getRandomIndex(1,50);
let currentTraveler, tripRepository, travelerRepository, destinationRepository;

const fetchAllData = () => {
    Promise.all([fetchTravelerData(), fetchAllTrips(), fetchAllDestinations()])
        .then(data => {
            parseAllData(data);
            getCurrentUser();
            domUpdates.displayTrips(currentTraveler.trips, destinationRepository);
            domUpdates.populateDestinationDropdown(destinationRepository.destinations);
        });
}

const parseAllData = (data) => {
    let allTravelers = data[0].travelers;
    let allTrips = data[1].trips;
    let allDestinations = data[2].destinations;

    tripRepository = new TripRepository(allTrips);
    destinationRepository = new DestinationRepository(allDestinations);
    travelerRepository = new TravelerRepository(allTravelers);
}

const getCurrentUser = () => {
    const randomTraveler = travelerRepository.getTraveler(currentTravelerID);
    const randomTravelerTrips = tripRepository.getTripDataFor(currentTravelerID);
    currentTraveler = new Traveler(randomTraveler, randomTravelerTrips);
    console.log(currentTraveler);
}

const addTripData = () => {
    // const newDestinationID = destinationRepository.destinations[destinationRepository.destinations.length-1].id + 1;
    // let newTrip = {
    //     id: newDestinationID,
    //     userID: currentTravelerID,
    //     destinationID:
    //     travelers: travelersInput.value,
    //     date: dateInput.value,
    //     duration: durationInput.value,
    //     status: "pending",
    //     suggestedActivities: []
    // }
}

//query selectors
const dateInput = document.querySelector('#dateInput');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#travelersInput');
const destinationInput = document.querySelector('#destinationInput');

//event listeners
window.addEventListener("load", fetchAllData);

