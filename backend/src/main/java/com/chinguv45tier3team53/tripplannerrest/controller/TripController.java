package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.service.TripService;
import lombok.AllArgsConstructor;
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
    public Optional<Trip> getTripById(@PathVariable Long id){
        return tripService.getTripById(id);

    }
    @PostMapping
    public Trip createTrip(@RequestBody Trip trip){
        return tripService.saveTrip(trip);
    }


    @PutMapping("/{id}")
    public Trip updateTrip(@PathVariable Long id, @RequestBody Trip trip) {
        Optional<Trip> existingTrip= tripService.getTripById(id);

        if (existingTrip!=null) {
            existingTrip.get().setId(id);
            existingTrip.get().setTitle(trip.getTitle());
            existingTrip.get().setDetail(trip.getDetail());
            existingTrip.get().setUserId(trip.getUserId());
            existingTrip.get().setHotelId(trip.getHotelId());
            existingTrip.get().setStartDate(trip.getStartDate());
            existingTrip.get().setEndDate(trip.getEndDate());
            tripService.updateTrip(existingTrip.get());}

        return tripService.updateTrip(trip);
    }


        @DeleteMapping("/{id}")
    public void deleteTrip(@PathVariable Long id){
        tripService.deleteTripById(id);
    }
}

