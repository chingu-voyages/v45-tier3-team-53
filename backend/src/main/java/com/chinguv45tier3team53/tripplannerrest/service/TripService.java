package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;

import java.util.List;

public interface TripService {
    List<Trip> getAllTrips();

    Trip saveTrip(Trip trip);

    Trip getTripById(Long id);

    Trip updateTrip(Trip trip);

    void deleteTripById(Long id);
}
