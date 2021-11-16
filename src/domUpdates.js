let domUpdates = {
    displayTrips(userTrips, destinations) {
        userTrips.forEach((trip) => {
            let statusTagIcon = '<i class="far fa-check-circle"></i>';
            if(trip.status === "pending") {
              statusTagIcon = '<i class="fas fa-hourglass-start fa-sm"></i>';
            } 

            tripsGrid.innerHTML += `<article class="card">
            <img src=${destinations.getDestinationByID(trip.destinationID).image} alt="${destinations.getDestinationByID(trip.destinationID).alt}">
            <div class="card-info">
              <div class="card-header">
                <h3><b>${destinations.getDestinationByID(trip.destinationID).destination}</b>&nbsp;&nbsp; ${trip.date}</h3>
                <article class="status-tag ${trip.status}">${statusTagIcon}${trip.status}</article>
              </div>
              <div class="card-info-tags">
                <article class="card-tag"><p id="travelersTag">${trip.travelers} travelers</p></article>
                <article class="card-tag"><p id="durationTag">${trip.duration} days</p></article>
              </div>
            </div>
          </article>`;
        });
    },

    clearTrips(){
      tripsGrid.innerHTML = '';
    },

    displayUserName(userName) {
      const firstName = userName.split(' ')[0];
      welcomeMessage.innerHTML = `So, ${firstName}, where to?`;
    },

    displayAnnualCost(cost) {
      userAnnualSpending.innerHTML = `<i class="fas fa-info-circle"></i>You've spent $${cost} on trips this year`;
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
const welcomeMessage = document.querySelector('#welcomeMessage');
const userAnnualSpending = document.querySelector('#userAnnualSpending');

export default domUpdates;