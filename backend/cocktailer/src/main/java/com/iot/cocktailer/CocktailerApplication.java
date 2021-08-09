package com.iot.cocktailer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class CocktailerApplication {

	public static final String APPLICATION_LOCATIONS = "spring.config.location=" +
			"classpath:application.properties," +
			"classpath:aws.properties," +
			"classpath:datasource.properties";

	public static void main(String[] args) {
		new SpringApplicationBuilder(CocktailerApplication.class)
							.properties(APPLICATION_LOCATIONS)
							.run(args);
	}

}
