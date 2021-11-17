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

    clearDOM(){
      tripsGrid.innerHTML = '';
      dateInput.value = '';
      durationInput.value = '';
      travelersInput.value = '';
      destinationInput.value = '';
    },

    setMinimumDate(date) {
      const formattedDate = date.split('/').join('-');
      dateInput.setAttribute("min", formattedDate);
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
    },

    validateLoginCredentials() {
      const travelerString = usernameInput.value.slice(0,8);
      const travelerID = Number(usernameInput.value.slice(8));
      const password = passwordInput.value;

      if(travelerString === "traveler" && 
          Number.isInteger(travelerID) && 
          travelerID > 0 && 
          travelerID < 51 &&
          password === "travel") {
            heroSection.removeAttribute("style");
            tripsSection.removeAttribute("style");
            loginSection.setAttribute("style", "display:none;");
      } else if (usernameInput.value === "agency" && password === "travel") {
          agentDashboardSection.removeAttribute("style");
          loginSection.setAttribute("style", "display:none;");
      }
      return travelerID;
    }
}

//query selectors
const tripsGrid = document.querySelector('#tripsGrid');
const destinationDropdown = document.querySelector('#destinationDropdown');
const welcomeMessage = document.querySelector('#welcomeMessage');
const dateInput = document.querySelector('#dateInput');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#travelersInput');
const destinationInput = document.querySelector('#destinationInput');
const userAnnualSpending = document.querySelector('#userAnnualSpending');
const usernameInput = document.querySelector('#usernameInput');
const passwordInput = document.querySelector('#passwordInput');
const heroSection = document.querySelector('#heroSection');
const tripsSection = document.querySelector('#tripsSection');
const loginSection = document.querySelector('#loginSection');
const agentDashboardSection = document.querySelector('#agentDashboard');

export default domUpdates;