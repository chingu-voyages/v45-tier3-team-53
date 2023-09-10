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
@Table(name = "transportation")
public class Transportation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "mode")
    private String mode;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "name", column = @Column(name = "ori_name")),
            @AttributeOverride( name = "coordinate.longitude", column = @Column(name = "ori_co_lo")),
            @AttributeOverride( name = "coordinate.latitude", column = @Column(name = "ori_co_la")),
            @AttributeOverride( name = "swBound.longitude", column = @Column(name = "ori_sw_lo")),
            @AttributeOverride( name = "swBound.latitude", column = @Column(name = "ori_sw_la")),
            @AttributeOverride( name = "neBound.longitude", column = @Column(name = "ori_ne_lo")),
            @AttributeOverride( name = "neBound.latitude", column = @Column(name = "ori_ne_la"))
    })
    @Column(name = "origin")
    private Location origin;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "name", column = @Column(name = "des_name")),
            @AttributeOverride( name = "coordinate.longitude", column = @Column(name = "des_co_lo")),
            @AttributeOverride( name = "coordinate.latitude", column = @Column(name = "des_co_la")),
            @AttributeOverride( name = "swBound.longitude", column = @Column(name = "des_sw_lo")),
            @AttributeOverride( name = "swBound.latitude", column = @Column(name = "des_sw_la")),
            @AttributeOverride( name = "neBound.longitude", column = @Column(name = "des_ne_lo")),
            @AttributeOverride( name = "neBound.latitude", column = @Column(name = "des_ne_la"))
    })
    @Column(name = "destination")
    private Location destination;
    @Column(name = "start")
    private Date start;
    @Column(name = "end")
    private Date end;
}