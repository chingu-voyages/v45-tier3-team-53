package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.controller.auth.AuthenticationRequest;
import com.chinguv45tier3team53.tripplannerrest.controller.auth.AuthenticationResponse;
import com.chinguv45tier3team53.tripplannerrest.controller.auth.RegisterRequest;
import com.chinguv45tier3team53.tripplannerrest.dao.UserRepository;
import com.chinguv45tier3team53.tripplannerrest.entity.Role;
import com.chinguv45tier3team53.tripplannerrest.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
    }
}
