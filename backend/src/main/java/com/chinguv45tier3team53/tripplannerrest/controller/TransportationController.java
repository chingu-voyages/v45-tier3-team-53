package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Transportation;
import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.service.TransportationService;
import com.chinguv45tier3team53.tripplannerrest.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/trans")
public class TransportationController {
    private final TransportationService service;
    private final TripService tripService;

    @GetMapping("/trip/{id}")
    public ResponseEntity<List<Transportation>> getTransportationListForTrip(@PathVariable long id) {
        Trip existingTrip = tripService.getTripById(id);

        return ResponseEntity.ok(existingTrip.getTransportationList());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Transportation> getTransportation(@PathVariable long id) {
        try {
            return ResponseEntity.ok(service.findById(id));
        } catch (RuntimeException e) {
            System.out.println(e);
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/trip/{id}")
    public ResponseEntity<Transportation> addTransportationToTrip(@PathVariable long id, @RequestBody Transportation transportation) {
        Trip existingTrip = tripService.getTripById(id);
        existingTrip.addTransportation(transportation);
        Transportation addedTransportation = service.save(transportation);

        return ResponseEntity.status(HttpStatus.CREATED).body(addedTransportation);
    }

    @PutMapping("/list")
    public ResponseEntity<Transportation> updateTransportation(@RequestBody Transportation transportation) {
        Transportation updatedTransportation = service.save(transportation);

        return ResponseEntity.ok(updatedTransportation);
    }

    @DeleteMapping("/list/{id}")
    public ResponseEntity<Void> deleteTransportation(@PathVariable long id) {
        try {
            Transportation tempTransportation = service.findById(id);
        } catch (RuntimeException e) {
            System.out.println(e);
            return ResponseEntity.notFound().build();
        }

        service.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
