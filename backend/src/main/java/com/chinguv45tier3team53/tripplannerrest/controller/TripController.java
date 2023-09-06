package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.service.TripService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@AllArgsConstructor
public class TripController {
    private TripService tripService;

    @GetMapping
    public ResponseEntity<List<Trip>> getAllTrips() {
        List<Trip> trips = tripService.getAllTrips();
        return ResponseEntity.ok(trips);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trip> getTripById(@PathVariable Long id) {
        try {
            Trip trip = tripService.getTripById(id);
            return ResponseEntity.ok(trip);
        } catch (EntityNotFoundException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Trip> createTrip(@RequestBody Trip trip) {
        Trip createdTrip = tripService.createTrip(trip);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTrip);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Trip> updateTrip(@PathVariable Long id, @RequestBody Trip trip) {
        Trip updatedTrip = tripService.updateTrip(id, trip);
        if (updatedTrip != null) {
            return ResponseEntity.ok(updatedTrip);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrip(@PathVariable Long id) {
        tripService.deleteTrip(id);
        return ResponseEntity.noContent().build();
    }
}

