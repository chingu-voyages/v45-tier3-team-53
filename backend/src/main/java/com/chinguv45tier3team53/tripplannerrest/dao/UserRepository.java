package com.chinguv45tier3team53.tripplannerrest.dao;

import com.chinguv45tier3team53.tripplannerrest.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
