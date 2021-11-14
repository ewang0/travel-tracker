import { expect } from 'chai';
import DestinationRepository from '../src/DestinationRepository';
import Traveler from '../src/DestinationRepository';

describe('DestinationRepository', () => {
    let destinationData;
    let destinationRepository;
    let trips;

    beforeEach(function() {
        destinationData = [{
            "id": 1,
            "destination": "Lima, Peru",
            "estimatedLodgingCostPerDay": 70,
            "estimatedFlightCostPerPerson": 400,
            "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
            "alt": "overview of city buildings with a clear sky"
          }, {
            "id": 2,
            "destination": "Stockholm, Sweden",
            "estimatedLodgingCostPerDay": 100,
            "estimatedFlightCostPerPerson": 780,
            "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "city with boats on the water during the day time"
          },
          {
            "id": 3,
            "destination": "Sydney, Austrailia",
            "estimatedLodgingCostPerDay": 130,
            "estimatedFlightCostPerPerson": 950,
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "opera house and city buildings on the water with boats"
          },
          {
            "id": 4,
            "destination": "Cartagena, Colombia",
            "estimatedLodgingCostPerDay": 65,
            "estimatedFlightCostPerPerson": 350,
            "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "alt": "boats at a dock during the day time"
          },
          {
            "id": 5,
            "destination": "Madrid, Spain",
            "estimatedLodgingCostPerDay": 150,
            "estimatedFlightCostPerPerson": 650,
            "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "city with clear skys and a road in the day time"
          }
        ];
        trips = [
          {
            "id": 1,
            "userID": 44,
            "destinationID": 1,
            "travelers": 1,
            "date": "2022/09/16",
            "duration": 8,
            "status": "approved",
            "suggestedActivities": []
          },
          {
            "id": 2,
            "userID": 35,
            "destinationID": 2,
            "travelers": 5,
            "date": "2022/10/04",
            "duration": 18,
            "status": "approved",
            "suggestedActivities": []
          }, 
          {
            "id": 3,
            "userID": 3,
            "destinationID": 5,
            "travelers": 4,
            "date": "2022/05/22",
            "duration": 17,
            "status": "approved",
            "suggestedActivities": []
          }
        ];

        destinationRepository = new DestinationRepository(destinationData);
      });
    
      it("should be a function", function() {
        expect(DestinationRepository).to.be.a("function");
      });
    
      it("should be an instance of DestinationRepository", function() {
        expect(destinationRepository).to.be.an.instanceOf(DestinationRepository);
        });
    
      it("should given a trips array, calculate the total cost of all trips", function() {
        let result = destinationRepository.getTotalCost(trips);
        expect(result).to.equal(29326);  
      });

      it("should find a destination given a destination ID", function() {
        let result = destinationRepository.getDestinationByID(3);
        expect(result).to.deep.equal(
          {
            "id": 3,
            "destination": "Sydney, Austrailia",
            "estimatedLodgingCostPerDay": 130,
            "estimatedFlightCostPerPerson": 950,
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "opera house and city buildings on the water with boats"
          }
        );
      });
});