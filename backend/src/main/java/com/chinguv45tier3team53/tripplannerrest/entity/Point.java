package com.chinguv45tier3team53.tripplannerrest.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Embeddable
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Point {
    private double longitude;
    private double latitude;
}