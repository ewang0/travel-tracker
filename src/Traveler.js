class Traveler {
    constructor(travelerObject, userTrips){
        this.id = travelerObject.id;
        this.name = travelerObject.name;
        this.type = travelerObject.travelerType;
        this.trips = userTrips;
    }

    getPastTrips(date) {
        const currentDate = new Date(date);
        const pastTrips = this.trips.filter((trip) => {
            let tripDate = new Date(trip.date);
            return tripDate < currentDate;
        });
        return pastTrips;
    }

    getCurrentTrips(date) {
        const currentTrips = this.trips.filter((trip) => {
            return trip.date === date;
        });
        return currentTrips;
    }
    

    getFutureTrips(date) {
        const currentDate = new Date(date);
        const futureTrips = this.trips.filter((trip) => {
            let tripDate = new Date(trip.date);
            return tripDate > currentDate;
        });
        return futureTrips;
    }

    getPendingTrips() {
        const pendingTrips = this.trips.filter((trip) => {
            return trip.status === 'pending';
        });
        return pendingTrips;
    }

    getTripsBetweenDates(date1, date2) {
        const start = new Date(date1);
        const end = new Date(date2);
        const tripsBetweenDates = this.trips.filter((trip) => {
            let tripDate = new Date(trip.date);
            return tripDate > start && tripDate < end;
        });
        return tripsBetweenDates;
    }

    getTotalSpentCurrentYear(destinationRepository, date) {
        //get set of trips between currentDate and yearBeginning date
        const currentDate = new Date(date);
        const yearStart = `${currentDate.getFullYear()}/01/01`;

        return destinationRepository.getTotalCost();
    }
}

export default Traveler;