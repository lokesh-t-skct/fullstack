package com.example.project;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.project.DTO.Request.RegisterRequest;
import com.example.project.Service.AuthenticationService;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}
	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService) {
		return args -> {
			var admin = RegisterRequest.builder()
					.name("Admin")
					.email("admin@gmail.com").password("Admin@123")
					.role("admin")
					.build();
			System.out.println("Admin Registration: " + authenticationService.register(admin).getMessage());

			var user = RegisterRequest.builder()
					.name("John")
					.email("john@gmail.com").password("John@123")
					.role("user")
					.build();
			System.out.println("User Registration: " + authenticationService.register(user).getMessage());
		};
	}
}
