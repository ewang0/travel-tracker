import { expect } from "chai";
import TripRepository from "../src/TripRepository";

describe("TripRepository", () => {
    let tripData;
    let tripRepository;

    beforeEach(function() {
        tripData = [
            {
            "id": 1,
            "userID": 44,
            "destinationID": 49,
            "travelers": 1,
            "date": "2022/09/16",
            "duration": 8,
            "status": "approved",
            "suggestedActivities": []
          },
          {
            "id": 2,
            "userID": 35,
            "destinationID": 25,
            "travelers": 5,
            "date": "2022/10/04",
            "duration": 18,
            "status": "approved",
            "suggestedActivities": []
          }, 
          {
            "id": 3,
            "userID": 3,
            "destinationID": 22,
            "travelers": 4,
            "date": "2022/05/22",
            "duration": 17,
            "status": "approved",
            "suggestedActivities": []
          }, 
          {
            "id": 4,
            "userID": 44,
            "destinationID": 14,
            "travelers": 2,
            "date": "2022/02/25",
            "duration": 10,
            "status": "approved",
            "suggestedActivities": []
          }, 
          {
            "id": 5,
            "userID": 42,
            "destinationID": 29,
            "travelers": 3,
            "date": "2022/04/30",
            "duration": 18,
            "status": "approved",
            "suggestedActivities": []
          }];
        
        tripRepository = new TripRepository(tripData);
    });

    it("should be a function", function() {
        expect(TripRepository).to.be.a("function");
      });

    it("should be an instance of TripRepository", function() {
        expect(tripRepository).to.be.an.instanceOf(TripRepository);
    });

    it("should get all trips for a user, given an ID", function() {
        const result = tripRepository.getTripDataFor(44);
        expect(result).to.deep.equal([
            {
            "id": 1,
            "userID": 44,
            "destinationID": 49,
            "travelers": 1,
            "date": "2022/09/16",
            "duration": 8,
            "status": "approved",
            "suggestedActivities": []
            },
            {
                "id": 4,
                "userID": 44,
                "destinationID": 14,
                "travelers": 2,
                "date": "2022/02/25",
                "duration": 10,
                "status": "approved",
                "suggestedActivities": []
              }
        ]);
    });



});