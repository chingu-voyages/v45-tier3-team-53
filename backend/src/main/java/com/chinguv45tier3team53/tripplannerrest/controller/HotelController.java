package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Hotel;
import com.chinguv45tier3team53.tripplannerrest.service.HotelService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/hotel")
public class HotelController {
    private final HotelService service;

    @GetMapping("/list")
    public ResponseEntity<List<Hotel>> getHotelList() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Hotel> getHotel(@PathVariable long id) {
        try {
            return ResponseEntity.ok(service.findById(id));
        } catch (EntityNotFoundException e) {
            System.out.println(e);
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/list")
    public ResponseEntity<Hotel> addHotel(@RequestBody Hotel hotel) {
        Hotel addedHotel = service.save(hotel);

        return ResponseEntity.status(HttpStatus.CREATED).body(addedHotel);
    }

    @PutMapping("/list")
    public ResponseEntity<Hotel> updateHotel(@RequestBody Hotel hotel) {
        Hotel updatedHotel = service.save(hotel);

        return ResponseEntity.ok(updatedHotel);
    }

    @DeleteMapping("/list/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable long id) {
        try {
            Hotel tempHotel = service.findById(id);
        } catch (EntityNotFoundException e) {
            System.out.println(e);
            return ResponseEntity.notFound().build();
        }

        service.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
