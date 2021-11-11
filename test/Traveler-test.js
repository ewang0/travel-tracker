import { expect } from 'chai';
import Traveler from '../src/Traveler';

describe('Traveler', () => {
  let traveler;
  let travelerObject;
  let userTrips;

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
      },{
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


});
