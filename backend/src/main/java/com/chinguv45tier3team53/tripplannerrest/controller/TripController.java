package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import com.chinguv45tier3team53.tripplannerrest.service.TripService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trips")
@AllArgsConstructor
public class TripController {
    private TripService tripService;

    @GetMapping
    public List<Trip> getAllTrips(){
        return tripService.getAllTrips();
    }

    @GetMapping("/{id}")
    public Trip getTripById(@PathVariable Long id){
        return tripService.getTripById(id);

    }
    @PostMapping
    public Trip createTrip(@RequestBody Trip trip){
        return tripService.saveTrip(trip);
    }

    @PutMapping("/{id}")
    public Trip updateTrip(@PathVariable Long id,@RequestBody Trip trip){
        try{
            Trip existingTrip = tripService.getTripById(id);
            existingTrip.setId(id);
            existingTrip.setTitle(trip.getTitle());
            existingTrip.setDetail(trip.getDetail());
            existingTrip.setUser_id(trip.getUser_id());
            existingTrip.setHotel_id(trip.getHotel_id());
            existingTrip.setStart_date(trip.getStart_date());
         existingTrip.setEnd_date(trip.getEnd_date());
            tripService.updateTrip(existingTrip);
        }catch(IllegalArgumentException e){
            System.out.println("Exception occurred, course not updated");
            throw e;
        }
        return tripService.updateTrip(trip);
    }

    @DeleteMapping("/{id}")
    public void deleteTrip(@PathVariable Long id){
        tripService.deleteTripById(id);
    }
}

