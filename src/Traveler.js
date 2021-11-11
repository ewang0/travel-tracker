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

    getCurrentTrips() {

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
        })
        return pendingTrips;
    }

    getTotalSpentCurrentYear() {
        
    }
}

export default Traveler;