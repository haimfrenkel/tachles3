package com.tachles.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
public class UsersApplication {
	public static void main(String[] args) {
		SpringApplication.run(UsersApplication.class, args);
	}
}
