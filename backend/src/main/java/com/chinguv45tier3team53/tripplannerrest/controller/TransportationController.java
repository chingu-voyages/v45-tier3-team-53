package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Transportation;
import com.chinguv45tier3team53.tripplannerrest.service.TransportationService;
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

    @GetMapping("/list")
    public ResponseEntity<List<Transportation>> getTransportationList() {
        return ResponseEntity.ok(service.findAll());
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

    @PostMapping("/list")
    public ResponseEntity<Transportation> addTransportation(@RequestBody Transportation transportation) {
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
