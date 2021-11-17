class TripRepository {
    constructor(trips) {
        this.trips = trips;
    }

    getTripDataFor(userID) {
        const userTripData = this.trips.filter((trip) => {
            return userID === trip.userID;
        });
        return userTripData;
    }

    getAllPendingTrips() {
        const pendingTrips = this.trips.filter((trip) => {
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

    getAllTripsOnDate(date) {
        const allTripsOnDate = this.trips.filter((trip) => {
            if (trip.date === date) {
                return trip;
            }
        });

        return allTripsOnDate;
    }
}

export default TripRepository;