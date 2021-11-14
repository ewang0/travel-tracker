import { expect } from "chai";
import TravelerRepository from "../src/TravelerRepository";

describe("TravelerRepository", () => {
    let travelerData;
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



});