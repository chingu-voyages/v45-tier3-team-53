package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.dao.HotelRepository;
import com.chinguv45tier3team53.tripplannerrest.entity.Hotel;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HotelService {
    private final HotelRepository repository;

    public List<Hotel> findAll() {
        return repository.findAll();
    }

    public Hotel findById(long id) {
        Hotel hotel = repository.findById(id).orElseThrow(EntityNotFoundException::new);
        return hotel;
    }

    public Hotel save(Hotel hotel) {
        return repository.save(hotel);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }
}
