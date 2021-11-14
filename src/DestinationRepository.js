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

        return Number(totalCost.toFixed(2));
    }

    getDestinationByID(destinationID) {
        const targetDestination = this.destinations.find((destination) => {
            return destination.id === destinationID;
        });

        return targetDestination;
    }

    getDestinationByName(destinationName) {
        const targetDestination = this.destinations.find((destination) => {
            return destination.destination === destinationName;
        });

        return targetDestination;
    }
}

export default DestinationRepository;