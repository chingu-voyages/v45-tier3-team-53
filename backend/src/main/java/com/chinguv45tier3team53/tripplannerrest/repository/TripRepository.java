package com.chinguv45tier3team53.tripplannerrest.repository;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip, Long> {
}
