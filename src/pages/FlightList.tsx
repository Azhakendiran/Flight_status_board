// import React, { useEffect, useState } from 'react';
import { fetchFlights } from '../api'; // Assuming the API call is made in this file

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFlights = async () => {
      console.log('Fetching flights...'); // Check if this is printed
      try {
        const data = await fetchFlights();
        console.log('Fetched Flights:', data);  // Log fetched data
        setFlights(data);
      } catch (err: any) {
        console.error('Error fetching flights:', err);  // Log error
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getFlights();
  }, []);

  // Check if flights are being populated
  console.log('Flights:', flights);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Flight Status Board</h1>
      {flights.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Airline</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.airline}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
};

export default FlightList;
