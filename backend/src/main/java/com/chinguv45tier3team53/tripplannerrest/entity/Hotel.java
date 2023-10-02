package com.chinguv45tier3team53.tripplannerrest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "hotel_name")
    private String hotelName;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "name", column = @Column(name = "hot_name")),
            @AttributeOverride( name = "coordinate.longitude", column = @Column(name = "hot_co_lo")),
            @AttributeOverride( name = "coordinate.latitude", column = @Column(name = "hot_co_la")),
            @AttributeOverride( name = "swBound.longitude", column = @Column(name = "hot_sw_lo")),
            @AttributeOverride( name = "swBound.latitude", column = @Column(name = "hot_sw_la")),
            @AttributeOverride( name = "neBound.longitude", column = @Column(name = "hot_ne_lo")),
            @AttributeOverride( name = "neBound.latitude", column = @Column(name = "hot_ne_la"))
    })
    @Column(name = "hotel_location")
    private Location hotelLocation;
    @Column(name = "check_in")
    private Date checkIn;
    @Column(name = "check_out")
    private Date checkOut;
}
