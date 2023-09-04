package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.dao.TransportationRepository;
import com.chinguv45tier3team53.tripplannerrest.entity.Transportation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransportationService {
    private final TransportationRepository repository;

    public List<Transportation> findAll() {
        return repository.findAll();
    }

    public Transportation findById(int theId) {
        Optional<Transportation> result = repository.findById(theId);

        Transportation transportation = null;
        if (result.isPresent()) {
            transportation = result.get();
        } else {
            throw new RuntimeException("Did not find openIdUser id - " + theId);
        }

        return transportation;
    }

    public void save(Transportation transportation) {
        repository.save(transportation);
    }

    public void deleteById(int theId) {
        repository.deleteById(theId);
    }
}
