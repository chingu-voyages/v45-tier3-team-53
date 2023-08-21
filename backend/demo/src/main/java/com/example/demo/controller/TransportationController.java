package com.example.demo.controller;

import com.example.demo.model.Transportation;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.TransportationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;


import java.util.List;

@RestController
@RequestMapping("/api/transportation")


public class TransportationController {

   
    @Autowired
    private TransportationRepository transportationRepository;

    @GetMapping
    public List<Transportation> getAllTransportations() {
        return transportationRepository.findAll();
    }

    @PostMapping
    public Transportation createTransportation(@RequestBody Transportation transportation) {
        return transportationRepository.save(transportation);
    }



    @PutMapping("/{id}")
    public Transportation updateTransportation(@PathVariable Integer id, @RequestBody Transportation updatedTransportation) {
        Optional<Transportation> optionalTransportation = transportationRepository.findById(id);
    
        if (optionalTransportation.isPresent()) {
            Transportation transportation = optionalTransportation.get();
            transportation.setMode(updatedTransportation.getMode());
            transportation.setDepartureLocation(updatedTransportation.getDepartureLocation());
            transportation.setArrivalLocation(updatedTransportation.getArrivalLocation());
            transportation.setDepartureDate(updatedTransportation.getDepartureDate());
            transportation.setArrivalDate(updatedTransportation.getArrivalDate());
    
            return transportationRepository.save(transportation);
        } else {
            throw new ResourceNotFoundException("Transportation not found with id: " + id);
        }
    }
}
