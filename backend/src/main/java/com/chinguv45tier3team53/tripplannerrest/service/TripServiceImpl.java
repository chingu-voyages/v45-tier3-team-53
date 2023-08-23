package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripServiceImpl implements TripService{
    @Autowired
    private TripRepository tripRepository;
    public List<Trip> getAllTrips(){
        try{
            return tripRepository.findAll();
        }catch (DataAccessException ex) {
            throw ex;
        }
    }

    @Override
    public Trip saveTrip(Trip trip) {
        return null;
    }

    @Override
    public Trip getTripById(Long id) {
        return null;
    }

    @Override
    public Trip updateTrip(Trip trip) {
        return null;
    }

    @Override
    public void deleteTripById(Long id) {

    }

}
