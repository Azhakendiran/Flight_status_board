// import axios from 'axios';

// // Base URL for the flight status API
// const API_BASE = 'https://flight-status-mock.core.travelopia.cloud/flights';

// // Fetch all flights
// export const fetchFlights = async () => {
//   try {
//     const response = await axios.get(API_BASE);
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching flight data');
//   }
// };

// // Fetch flight details by ID
// export const fetchFlightDetails = async (id: string) => {
//   try {
//     const response = await axios.get(`${API_BASE}/${id}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching flight details');
//   }
// };
export const fetchFlights = async () => {
    try {
      const response = await fetch('https://flight-status-mock.core.travelopia.cloud/flights');
      const data = await response.json();
      console.log('API Response:', data); // Log the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw new Error('Error fetching flight data');
    }
  };
  