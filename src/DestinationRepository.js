class DestinationRepository {
    constructor(destinationData){
        this.destinations = destinationData;
    }

    getTotalCost(tripsArray) {
        const totalCost = tripsArray.reduce((acc, trip) => {
            this.destinations.forEach((destination) => {
                if(destination.id === trip.destinationID) {
                    let totalLodgingCost = trip.duration * trip.travelers * destination.estimatedLodgingCostPerDay;
                    let totalFlightCost = trip.travelers * destination.estimatedFlightCostPerPerson;
                    let agentFee = 1.1;
                    acc += (totalLodgingCost + totalFlightCost)*agentFee;
                }
            });
            return acc;
        }, 0);

        return totalCost;
    }
}

export default DestinationRepository;