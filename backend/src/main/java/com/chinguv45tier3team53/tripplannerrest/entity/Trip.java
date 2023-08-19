package com.chinguv45tier3team53.tripplannerrest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name="trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="user_id",nullable=false)
    private Long user_id;
    @Column(name="hotel_id",nullable=false)
    private Long hotel_id;
    @Column(name="trip_title")
    private String title;
    private Date start_date;
    private Date end_date;
    private String detail;
}
