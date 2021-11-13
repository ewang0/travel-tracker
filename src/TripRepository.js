class TripRepository {
    constructor(trips) {
        this.trips = trips;
    }

    getTripDataFor(userID) {
        const userTripData = trips.filter((trip) => {
            return userID === trip.userID;
        });
        return userTripData;
    }
}

export default TripRepository;