package com.chinguv45tier3team53.tripplannerrest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "tripTitle")
    private String title;
    private Date startDate;
    private Date endDate;
    private String detail;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="trips_id")
    private List<Transportation> transportationList;
}
