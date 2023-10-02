package com.chinguv45tier3team53.tripplannerrest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Embeddable
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Location {
    private String name;
    @Embedded
    private Point coordinate;
    @Embedded
    private Point swBound;
    @Embedded
    private Point neBound;
}