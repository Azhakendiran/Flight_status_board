import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFlightDetails } from '../api';

const FlightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFlightDetails = async () => {
      try {
        const data = await fetchFlightDetails(id!);
        setFlight(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getFlightDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Flight Details</h1>
      {flight ? (
        <div>
          <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
          <p><strong>Airline:</strong> {flight.airline}</p>
          <p><strong>Origin:</strong> {flight.origin}</p>
          <p><strong>Destination:</strong> {flight.destination}</p>
          <p><strong>Departure Time:</strong> {flight.departureTime}</p>
          <p><strong>Status:</strong> {flight.status}</p>
        </div>
      ) : (
        <p>No flight details available</p>
      )}
    </div>
  );
};

export default FlightDetail;
