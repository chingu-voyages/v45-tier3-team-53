package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;

import java.util.List;
import java.util.Optional;

public interface TripService {
    List<Trip> getAllTrips();

    Trip saveTrip(Trip trip);

    Optional<Trip> getTripById(Long id);

    Trip updateTrip(Trip trip);

    void deleteTripById(Long id);
}
