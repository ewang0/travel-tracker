class TravelerRepository {
    constructor(travelerData) {
        this.travelers = travelerData;
    }

    getTraveler(userID) {
        const user = this.travelers.find((traveler) => {
            return traveler.id === userID;
        });

        return user;
    }

    getTravelersOnTrips(tripsArray) {
        const travelersOnTrips = tripsArray.reduce((acc, trip) => {
            const travelerOnTrip = this.travelers.find((traveler) => {
                return traveler.id === trip.userID;
            });
            let travelerObj = {id: travelerOnTrip.id, name: travelerOnTrip.name};
            acc.push(travelerObj);
            return acc;
        }, []);

        return travelersOnTrips;
    }
}

export default TravelerRepository;