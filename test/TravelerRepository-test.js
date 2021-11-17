import { expect } from "chai";
import TravelerRepository from "../src/TravelerRepository";

describe("TravelerRepository", () => {
    let travelerData;
    let tripData;
    let travelerRepository;

    beforeEach(function() {
        travelerData = [
        {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer",
        }, 
        {
            "id": 2,
            "name": "Rachael Vaughten",
            "travelerType": "thrill-seeker",
        }, 
        {
            "id": 3,
            "name": "Sibby Dawidowitsch",
            "travelerType": "shopper",
        }, 
        {
            "id": 4,
            "name": "Leila Thebeaud",
            "travelerType": "photographer",
        }, 
        {
            "id": 5,
            "name": "Tiffy Grout",
            "travelerType": "thrill-seeker",
        }];

        tripData = [
            {
            "id": 1,
            "userID": 1,
            "destinationID": 49,
            "travelers": 1,
            "date": "2022/09/16",
            "duration": 8,
            "status": "approved",
            "suggestedActivities": []
          },
          {
            "id": 2,
            "userID": 2,
            "destinationID": 25,
            "travelers": 5,
            "date": "2022/10/04",
            "duration": 18,
            "status": "pending",
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
            "userID": 4,
            "destinationID": 14,
            "travelers": 2,
            "date": "2022/02/25",
            "duration": 10,
            "status": "pending",
            "suggestedActivities": []
          }, 
          {
            "id": 5,
            "userID": 5,
            "destinationID": 29,
            "travelers": 3,
            "date": "2022/09/16",
            "duration": 18,
            "status": "approved",
            "suggestedActivities": []
          }];
        
        travelerRepository = new TravelerRepository(travelerData);
    });

    it("should be a function", function() {
        expect(TravelerRepository).to.be.a("function");
      });

    it("should be an instance of TravelerRepository", function() {
        expect(travelerRepository).to.be.an.instanceOf(TravelerRepository);
    });

    it("should get a traveler, given an ID", function() {
        const result = travelerRepository.getTraveler(3);
        expect(result).to.deep.equal(
            {
                "id": 3,
                "name": "Sibby Dawidowitsch",
                "travelerType": "shopper",
            }        
        );
    });

    it("should get all travelers on a trip given an array of trips", function() {
        let result = travelerRepository.getTravelersOnTrips(tripData);
        expect(result).to.deep.equal([
            {id:1, name:"Ham Leadbeater"}, 
            {id:2, name:"Rachael Vaughten"}, 
            {id:3, name:"Sibby Dawidowitsch"},
            {id:4, name:"Leila Thebeaud"}, 
            {id:5, name:"Tiffy Grout"}
        ]);
    });



});