package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TripServiceImpl implements TripService{

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
    public Optional<Trip> getTripById(Long id) {
        try {
            return tripRepository.findById(id);
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
