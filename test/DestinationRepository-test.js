import { expect } from 'chai';
import Traveler from '../src/DestinationRepository';

describe('DestinationRepository', () => {
    let destinationData;
    let destinationRepository;
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
        destinationRepository = new DestinationRepository(destinationData);
      });
    
      it("should be a function", function() {
        expect(Traveler).to.be.a("function");
      });
    
      it("should be an instance of Traveler", function() {
        expect(traveler).to.be.an.instanceOf(Traveler);
        });
    
      it("should get pending trips", function() {
        let result = traveler.getPendingTrips();
        expect(result).to.deep.equal([{
            "id": 3,
            "userID": 3,
            "destinationID": 22,
            "travelers": 4,
            "date": "2022/05/22",
            "duration": 17,
            "status": "pending",
            "suggestedActivities": []
          },
          {
            "id": 50,
            "userID": 3,
            "destinationID": 16,
            "travelers": 5,
            "date": "2022/07/02",
            "duration": 17,
            "status": "pending",
            "suggestedActivities": []
          },
          {
            "id": 173,
            "userID": 3,
            "destinationID": 9,
            "travelers": 6,
            "date": "2023/04/21",
            "duration": 18,
            "status": "pending",
            "suggestedActivities": []
          }
        ]);  
      });
});