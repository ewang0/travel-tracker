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
                <article class="card-tag"><p id="travelersTag">${trip.travelers} Travelers</p></article>
                <article class="card-tag"><p id="durationTag">${trip.duration} Days</p></article>
              </div>
            </div>
          </article>`
        });
    }
}

//query selectors
const tripsGrid = document.querySelector('#tripsGrid');

export default domUpdates;