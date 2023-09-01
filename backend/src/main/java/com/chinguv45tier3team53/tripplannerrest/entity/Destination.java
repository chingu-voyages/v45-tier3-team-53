package com.chinguv45tier3team53.tripplannerrest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long destination_id;
    private String name;
    private String address;
    private Coordinate coordinate;
    private Coordinate viewportCenter;
    @OneToMany(mappedBy = "destination")
    private List<Trip> trips;
}
