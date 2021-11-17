class Agent {
    constructor(tripRepository, destinationRepository, travelerRepository) {
        this.allTrips = tripRepository;
        this.allDestinations = destinationRepository;
        this.allTravelers = travelerRepository;
    }

    getAllPendingTrips() {
        const pendingTrips = this.allTrips.filter((trip) => {
            return trip.status === "pending";
        });

        const sortedPendingTrips = pendingTrips.sort((trip1, trip2) => {
            let trip1Date = new Date(trip1.date);
            let trip2Date = new Date(trip2.date);
            if(trip1Date > trip2Date) {
                return -1;
            }
        });

        return sortedPendingTrips;
    }

    getTotalIncome(year) {
        
    }

    getTravelers(date) {

    }


}

export default Agent;