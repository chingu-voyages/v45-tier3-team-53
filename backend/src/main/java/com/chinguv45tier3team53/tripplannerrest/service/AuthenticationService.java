package com.chinguv45tier3team53.tripplannerrest.service;

import com.chinguv45tier3team53.tripplannerrest.controller.auth.AuthenticationRequest;
import com.chinguv45tier3team53.tripplannerrest.controller.auth.AuthenticationResponse;
import com.chinguv45tier3team53.tripplannerrest.controller.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    public AuthenticationResponse register(RegisterRequest request) {
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
    }
}
