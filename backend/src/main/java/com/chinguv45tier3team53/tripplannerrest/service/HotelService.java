package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.dao.HotelRepository;
import com.chinguv45tier3team53.tripplannerrest.entity.Hotel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HotelService {
    private final HotelRepository repository;

    public List<Hotel> findAll() {
        return repository.findAll();
    }

    public Hotel findById(long id) {
        Optional<Hotel> result = repository.findById(id);

        Hotel hotel = null;
        if (result.isPresent()) {
            hotel = result.get();
        } else {
            throw new RuntimeException("Did not find Hotel id - " + id);
        }

        return hotel;
    }

    public Hotel save(Hotel hotel) {
        return repository.save(hotel);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }
}
