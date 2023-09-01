package com.chinguv45tier3team53.tripplannerrest.TestDestinationAndTrip.TestDestinationAndTrip;

import static org.junit.Assert.*;

import com.chinguv45tier3team53.tripplannerrest.entity.Coordinate;
import com.chinguv45tier3team53.tripplannerrest.entity.Destination;
import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import org.junit.Before;
import org.junit.Test;
import java.util.Date;

public class TestTrip {
    private Trip trip;
    private Destination destination;

    @Before
    public void setUp() {
        trip = new Trip();
        trip.setTitle("Test Trip");
        trip.setStartDate(new Date());
        trip.setEndDate(new Date());
        trip.setDetail("This is a test trip");

        destination = new Destination();
        destination.setName("Test Destination");
        destination.setAddress("123 Test St");

        Coordinate coordinate = new Coordinate();
        coordinate.setLatitude(40.7128);
        coordinate.setLongitude(-74.0060);
        destination.setCoordinate(coordinate);

        trip.setDestination(destination);
    }

    @Test
    public void testTripDestinationInfo() {
        assertEquals("Test Trip", trip.getTitle());
        assertNotNull(trip.getStartDate());
        assertNotNull(trip.getEndDate());
        assertEquals("This is a test trip", trip.getDetail());

        assertNotNull(trip.getDestination());
        assertEquals("Test Destination", trip.getDestination().getName());
        assertEquals("123 Test St", trip.getDestination().getAddress());
        assertNotNull(trip.getDestination().getCoordinate());
        assertEquals(40.7128, trip.getDestination().getCoordinate().getLatitude(), 0.0001);
        assertEquals(-74.0060, trip.getDestination().getCoordinate().getLongitude(), 0.0001);
    }
}

