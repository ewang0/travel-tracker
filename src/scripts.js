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
    console.log(dateInput.value);
    const formattedDate = dateInput.value.split('-').join('/');
    const newTripID = tripRepository.trips[tripRepository.trips.length-1].id + 1;
    const newDestinationID = destinationRepository.getDestinationByName(destinationInput.value).id;
    let newTrip = {
        id: newTripID,
        userID: currentTravelerID,
        destinationID: newDestinationID,
        travelers: travelersInput.value,
        date: formattedDate,
        duration: durationInput.value,
        status: "pending",
        suggestedActivities: []
    }
    return postTripRequest(newTrip)
        .then(data => console.log('response', data));
}

//query selectors
const dateInput = document.querySelector('#dateInput');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#travelersInput');
const destinationInput = document.querySelector('#destinationInput');
const submitTripRequestBtn = document.querySelector('#submitTripRequestBtn');

//event listeners
window.addEventListener("load", fetchAllData);
submitTripRequestBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addTripData()
        .then(() => {
            return fetchAllTrips();
        })
        .then(data => {
            tripRepository = new TripRepository(data.trips);
            currentTraveler.trips = tripRepository.getTripDataFor(currentTravelerID);
            domUpdates.clearTrips();
            domUpdates.displayTrips(currentTraveler.trips, destinationRepository);
        })
})

