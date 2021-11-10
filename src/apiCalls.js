export let fetchTravelerData = () => {
    return fetch('http://localhost:3001/api/v1/travelers').then(response => response.json())
}

export let fetchAllTrips = () => {
    return fetch('http://localhost:3001/api/v1/trips').then(response => response.json())
}

export let fetchAllDestinations = () => {
    return fetch('http://localhost:3001/api/v1/destinations').then(response => response.json())
}