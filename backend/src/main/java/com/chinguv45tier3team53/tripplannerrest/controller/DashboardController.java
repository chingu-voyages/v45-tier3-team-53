package com.chinguv45tier3team53.tripplannerrest.controller;

import com.chinguv45tier3team53.tripplannerrest.dto.UserInfoResponse;
import com.chinguv45tier3team53.tripplannerrest.entity.User;
import com.chinguv45tier3team53.tripplannerrest.service.JwtService;
import com.chinguv45tier3team53.tripplannerrest.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final UserService userService;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @GetMapping("/user-info")
    public ResponseEntity<UserInfoResponse> getUserInfo(HttpServletRequest request) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        jwt = authHeader.substring(7);
        userEmail = jwtService.extractUsername(jwt);
        User user = userService.findByEmail(userEmail);

        return ResponseEntity.ok(
                UserInfoResponse.builder()
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .email(user.getEmail())
                        .build()
        );
    }

    @GetMapping("/logged-in")
    public ResponseEntity<Boolean> isTokenValid(HttpServletRequest request) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        jwt = authHeader.substring(7);
        userEmail = jwtService.extractUsername(jwt);
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
        return ResponseEntity.ok(jwtService.isTokenValid(jwt, userDetails));
    }
}
