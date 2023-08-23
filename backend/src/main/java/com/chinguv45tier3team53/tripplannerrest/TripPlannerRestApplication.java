package com.chinguv45tier3team53.tripplannerrest;

import com.chinguv45tier3team53.tripplannerrest.entity.Trip;
import com.chinguv45tier3team53.tripplannerrest.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TripPlannerRestApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(TripPlannerRestApplication.class, args);
	}
	@Autowired
	TripRepository tripRepository;
	public void run(String... args) throws Exception{
		try {
			Trip trip= Trip.builder()
					.user_id(100L).hotel_id(100L).title("Summer in Tokyo").detail("A family trip to Tokyo Japan").build();
			tripRepository.save(trip);
			Trip trip1= Trip.builder()
					.user_id(200L).hotel_id(200L).title("Autumn in New York").detail("A family trip to New York city in USA").build();
			tripRepository.save(trip1);
			Trip trip2= Trip.builder()
					.user_id(100L).hotel_id(100L).title("Winter in Austin").detail("A family trip to Austin Texas").build();
			tripRepository.save(trip2);
			Trip trip3= Trip.builder()
					.user_id(100L).hotel_id(100L).title("Spring in Budapest").detail("A family trip to Budapest Hungary").build();
			tripRepository.save(trip3);

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
