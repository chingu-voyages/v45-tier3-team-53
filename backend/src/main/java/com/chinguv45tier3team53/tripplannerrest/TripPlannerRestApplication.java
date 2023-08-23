package com.chinguv45tier3team53.tripplannerrest;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TripPlannerRestApplication  {

	public static void main(String[] args) {
		SpringApplication.run(TripPlannerRestApplication.class, args);
	}


}
