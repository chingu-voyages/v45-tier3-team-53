package com.chinguv45tier3team53.tripplannerrest.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Point {
    private double longitude;
    private double latitude;
}
