package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripServiceImpl implements TripService{
    @Autowired
    private TripRepository tripRepository;
    @Override
    public List<Trip> getAllTrips(){
        try{
            return tripRepository.findAll();
        }catch (DataAccessException ex) {
            throw ex;
        }
    }

    @Override
    public Trip saveTrip(Trip trip) {
        try{
            return tripRepository.save(trip);
        }catch(DataAccessException ex){

            throw ex;
        }
    }

    @Override
    public Trip getTripById(Long id) {
        try {
            return tripRepository.findById(id).get();
        } catch (EntityNotFoundException ex) {

            throw ex;
        }
    }

    @Override
    public Trip updateTrip(Trip trip) {
        try{
            return tripRepository.save(trip);
        }catch (DataAccessException ex){

            throw ex;
        }
    }

    @Override
    public void deleteTripById(Long id) {
        try{
            tripRepository.deleteById(id);
        }catch (EntityNotFoundException ex) {

            throw ex;
        }
    }

}
