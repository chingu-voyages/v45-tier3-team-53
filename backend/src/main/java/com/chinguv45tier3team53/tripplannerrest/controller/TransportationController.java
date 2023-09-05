package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.entity.Transportation;
import com.chinguv45tier3team53.tripplannerrest.service.TransportationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/trans")
public class TransportationController {
    private final TransportationService service;

    @GetMapping("/list")
    public List<Transportation> getTransportationList() {
        return service.findAll();
    }

    @GetMapping("/list/{id}")
    public Transportation getTransportation(@PathVariable long id) {
        try {
            return service.findById(id);
        } catch (RuntimeException e) {
            System.out.println(e);
            return null;
        }
    }

    @PostMapping("/list")
    public Transportation addTransportation(@RequestBody Transportation transportation) {
        Transportation addedTransportation = service.save(transportation);

        return addedTransportation;
    }
    
    @PutMapping("/list")
    public Transportation updateTransportation(@RequestBody Transportation transportation) {
        Transportation updatedTransportation = service.save(transportation);

        return updatedTransportation;
    }

    @DeleteMapping("/list/{id}")
    public String deleteTransportation(@PathVariable long id) {
        try {
            Transportation tempTransportation = service.findById(id);
        } catch (RuntimeException e) {
            System.out.println(e);
            return null;
        }

        service.deleteById(id);

        return "Deleted transportation id - " + id;
    }
}
