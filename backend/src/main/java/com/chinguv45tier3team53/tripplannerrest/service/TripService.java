package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Data
public class TripService {

    private TripRepository tripRepository;

    public List<Trip> getAllTrips() {
        try {
            return tripRepository.findAll();
        } catch (DataAccessException ex) {
            throw ex;
        }
    }

    public Trip createTrip(Trip trip) {
        try {
            return tripRepository.save(trip);
        } catch (DataAccessException ex) {
            throw ex;
        }
    }

    public Trip getTripById(Long id) {
        Optional<Trip> tripOptional = tripRepository.findById(id);
        if (tripOptional.isPresent()) {
            return tripOptional.get();
        } else {
            throw new EntityNotFoundException("Trip with ID " + id + " not found.");
        }
    }

    public Trip updateTrip(Long id, Trip trip) {
        Optional<Trip> existingTripOptional = tripRepository.findById(id);
        if (existingTripOptional.isPresent()) {
            trip.setId(id); // Make sure the ID of the trip is set
            return tripRepository.save(trip);
        } else {
            throw new EntityNotFoundException("Trip with ID " + id + " not found.");
        }
    }

    public void deleteTrip(Long id) {
        try {
            tripRepository.deleteById(id);
        } catch (EntityNotFoundException ex) {
            throw ex;
        }
    }

    public <T> T convertJSON(ObjectNode input, String fieldName, Class<T> returnType) {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.convertValue(input.get(fieldName), returnType);
    }
}
