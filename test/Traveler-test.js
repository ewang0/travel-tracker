import { expect } from 'chai';
import Traveler from '../src/Traveler';
import DestinationRepository from '../src/DestinationRepository';

describe('Traveler', () => {
  let traveler;
  let travelerObject;
  let userTrips;
  let destinations;
  let destinationRepo;

  beforeEach(function() {
    travelerObject = {
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper",
    };
    userTrips = [
        {
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
        "id": 41,
        "userID": 3,
        "destinationID": 25,
        "travelers": 3,
        "date": "2021/08/30",
        "duration": 11,
        "status": "approved",
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
        "id": 65,
        "userID": 3,
        "destinationID": 35,
        "travelers": 4,
        "date": "2020/03/21",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 102,
        "userID": 3,
        "destinationID": 3,
        "travelers": 3,
        "date": "2019/09/26",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 121,
        "userID": 3,
        "destinationID": 44,
        "travelers": 2,
        "date": "2020/03/11",
        "duration": 13,
        "status": "approved",
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
      }];
    traveler = new Traveler(travelerObject, userTrips);
    destinations = [
      {
        "id": 9,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      }, {
        "id": 44,
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
        "id": 16,
        "destination": "Cartagena, Colombia",
        "estimatedLodgingCostPerDay": 65,
        "estimatedFlightCostPerPerson": 350,
        "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "alt": "boats at a dock during the day time"
      },
      {
        "id": 35,
        "destination": "Madrid, Spain",
        "estimatedLodgingCostPerDay": 150,
        "estimatedFlightCostPerPerson": 650,
        "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with clear skys and a road in the day time"
      }
    ]
    destinationRepo = new DestinationRepository(destinations);
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

  it("should get past trips, given a date", function() {
    let result = traveler.getPastTrips('2021/11/11');
    expect(result).to.deep.equal([
      {
        "id": 41,
        "userID": 3,
        "destinationID": 25,
        "travelers": 3,
        "date": "2021/08/30",
        "duration": 11,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 65,
        "userID": 3,
        "destinationID": 35,
        "travelers": 4,
        "date": "2020/03/21",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 102,
        "userID": 3,
        "destinationID": 3,
        "travelers": 3,
        "date": "2019/09/26",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 121,
        "userID": 3,
        "destinationID": 44,
        "travelers": 2,
        "date": "2020/03/11",
        "duration": 13,
        "status": "approved",
        "suggestedActivities": []
      }
    ]);

  });

  it("should get future trips, given a date", function() {
    let result = traveler.getFutureTrips('2021/11/11');
    expect(result).to.deep.equal([
      {
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

  it("should get current trips, given a date", function() {
    let result = traveler.getCurrentTrips('2022/07/02');
    expect(result).to.deep.equal([
      {
        "id": 50,
        "userID": 3,
        "destinationID": 16,
        "travelers": 5,
        "date": "2022/07/02",
        "duration": 17,
        "status": "pending",
        "suggestedActivities": []
      }
    ]);  
  });

  it("should get trips between two dates", function() {
    let result = traveler.getTripsBetweenDates('2019/08/01', '2021/08/01');
    expect(result).to.deep.equal([
      {
        "id": 65,
        "userID": 3,
        "destinationID": 35,
        "travelers": 4,
        "date": "2020/03/21",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 102,
        "userID": 3,
        "destinationID": 3,
        "travelers": 3,
        "date": "2019/09/26",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 121,
        "userID": 3,
        "destinationID": 44,
        "travelers": 2,
        "date": "2020/03/11",
        "duration": 13,
        "status": "approved",
        "suggestedActivities": []
      }
    ]);
  });

  it("should get the total year-to-date cost of trips", function() {
    let result = traveler.getTotalSpentCurrentYear(destinationRepo, '2020/11/11');
    const totalCostPlusAgentFee = 19316;
    expect(result).to.equal(totalCostPlusAgentFee);
  });
});
