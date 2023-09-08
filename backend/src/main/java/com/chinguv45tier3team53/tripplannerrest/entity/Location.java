package com.chinguv45tier3team53.tripplannerrest.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Location {
    private String name;
    private Point coordinate;
    private Point swBound;
    private Point neBound;
}
