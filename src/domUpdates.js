let domUpdates = {
    displayTrips(userTrips, destinations) {
        userTrips.forEach((trip) => {
            tripsGrid.innerHTML += `<article class="card">
            <img src="${destinations.getDestinationByID(trip.destinationID).image}">
            <div class="card-info">
              <div class="card-header">
                <h3>${destinations.getDestinationByID(trip.destinationID).destination}</h3>
                <article class="status-tag">${trip.status}</article>
              </div>
              <div class="card-info-tags">
                <article class="card-tag"><p id="travelersTag">${trip.travelers} travelers</p></article>
                <article class="card-tag"><p id="durationTag">${trip.duration} days</p></article>
              </div>
            </div>
          </article>`
        });
    },

    clearTrips(){
      tripsGrid.innerHTML = '';
    },
    
    populateDestinationDropdown(destinations) {
      destinations.forEach((destination) => {
        destinationDropdown.innerHTML += `<option value="${destination.destination}">`;
      });
    }
}

//query selectors
const tripsGrid = document.querySelector('#tripsGrid');
const destinationDropdown = document.querySelector('#destinationDropdown');

export default domUpdates;