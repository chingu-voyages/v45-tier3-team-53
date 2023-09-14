package com.chinguv45tier3team53.tripplannerrest.dao;

import com.chinguv45tier3team53.tripplannerrest.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
