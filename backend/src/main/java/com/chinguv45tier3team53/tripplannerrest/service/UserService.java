package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.dao.UserRepository;
import com.chinguv45tier3team53.tripplannerrest.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    public User save(User user) {
        return repository.save(user);
    }
}
