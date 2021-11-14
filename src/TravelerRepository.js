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
}

export default TravelerRepository;