package com.chinguv45tier3team53.tripplannerrest.TestDestinationAndTrip.TestDestinationAndTrip;

import static org.junit.Assert.*;

import com.chinguv45tier3team53.tripplannerrest.entity.Coordinate;
import com.chinguv45tier3team53.tripplannerrest.entity.Destination;
import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import org.junit.Before;
import org.junit.Test;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;

public class TestDestinationAndTrip {
    private Destination destination;

    @Before
    public void setUp() {
        destination = new Destination();
        destination.setName("Test Destination");
        destination.setAddress("123 Test St");

        Coordinate coordinate = new Coordinate();
        coordinate.setLatitude(40.7128);
        coordinate.setLongitude(-74.0060);
        destination.setCoordinate(coordinate);

        Coordinate viewportCenter = new Coordinate();
        viewportCenter.setLatitude(40.7128);
        viewportCenter.setLongitude(-74.0060);
        destination.setViewportCenter(viewportCenter);
    }

    @Test
    public void testDestination() {
        assertEquals("Test Destination", destination.getName());
        assertEquals("123 Test St", destination.getAddress());
        assertEquals(40.7128, destination.getCoordinate().getLatitude(), 0.0001);
        assertEquals(-74.0060, destination.getCoordinate().getLongitude(), 0.0001);
        assertEquals(40.7128, destination.getViewportCenter().getLatitude(), 0.0001);
        assertEquals(-74.0060, destination.getViewportCenter().getLongitude(), 0.0001);
    }

    @Test
    public void testTrip() {
        Trip trip = new Trip();
        trip.setTitle("Test Trip");
        trip.setStartDate(new Date());
        trip.setEndDate(new Date());
        trip.setDetail("This is a test trip");
        trip.setDestination(destination);

        assertEquals("Test Trip", trip.getTitle());
        assertNotNull(trip.getStartDate());
        assertNotNull(trip.getEndDate());
        assertEquals("This is a test trip", trip.getDetail());
        assertEquals(destination, trip.getDestination());
    }

    @Test
    public void testDestinationTrips() {
        Trip trip1 = new Trip();
        trip1.setTitle("Trip 1");
        trip1.setStartDate(new Date());
        trip1.setEndDate(new Date());
        trip1.setDetail("Trip 1 Detail");
        trip1.setDestination(destination);

        Trip trip2 = new Trip();
        trip2.setTitle("Trip 2");
        trip2.setStartDate(new Date());
        trip2.setEndDate(new Date());
        trip2.setDetail("Trip 2 Detail");
        trip2.setDestination(destination);

        List<Trip> trips = new ArrayList<>();
        trips.add(trip1);
        trips.add(trip2);

        destination.setTrips(trips);

        assertEquals(2, destination.getTrips().size());
        assertTrue(destination.getTrips().contains(trip1));
        assertTrue(destination.getTrips().contains(trip2));
    }
}

