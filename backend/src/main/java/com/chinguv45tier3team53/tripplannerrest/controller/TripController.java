package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    @Autowired
    private TripRepository tripRepository;
    @GetMapping
    public List<Trip> getAllTrips(){
        return tripRepository.findAll();
    }

    @GetMapping("/{id}")
    public Trip getTripById(@PathVariable Long id){
        return tripRepository.findById(id).orElse(null);

    }
    @PostMapping
    public Trip createTrip(@RequestBody Trip trip){
        return tripRepository.save(trip);
    }

    @PutMapping("/{id}")
    public Trip updateTrip(@PathVariable Long id,@RequestBody Trip trip){
        trip.setId(id);
        return tripRepository.save(trip);
    }

    @DeleteMapping("/{id}")
    public void deleteTrip(@PathVariable Long id){
        tripRepository.deleteById(id);
    }
}

